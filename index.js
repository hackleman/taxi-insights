const main = require('./services/server.js');
// const postgres = require('./services/database.js');

async function start() {
  console.log("Starting main app..");
  try {
	  await main.initialize();
  } catch (err) {
	  console.error(err);
  	  process.exit(1);
  }
}

// async function startpostgres() {
//   console.log("Starting postgres.. ");
//   try {
//     await postgres.initialize();
//   } catch (err) {
//     console.error(err);
//     process.exit(1);
//   }
// }

start();
// startpostgres();


async function shutdown(e) {

  let err = e;
  console.log('Shutting down');

  // try {
  //   await postgres.close();
  // } catch (e) {
  //   console.log('Encountered error', e);
  //   err = err || e;
  // }

  try {
    await main.close();
  } catch (e) {
    console.log('Encountered error', e);
    err = err || e;
  }



  console.log('Exiting process');

  if (err) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

// Ensure proper shutdown on CTRL + C case
process.on('SIGTERM', () => {
  console.log('Received SIGTERM');
  shutdown();
});

process.on('SIGINT', () => {
  console.log('Received SIGINT');

  shutdown();
});

process.on('uncaughtException', err => {
  console.log('Uncaught exception');
  console.error(err);

  shutdown(err);
});
