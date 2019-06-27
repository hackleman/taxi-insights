import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

// Redux imports
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import store from './store';
import PropTypes from 'prop-types';

// Component imports
import Home from './components/Home/home';
import NavBar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Charts from './components/Charts/charts';
import Chart1 from './components/Charts/Chart1/chart1';
import Graphs from './components/Graphs/graphs';
import Auth from './components/Auth/login';
import Register from './components/Auth/register';
import Contact from './components/Contact/contact';

// Styling
import { CSSTransition,TransitionGroup } from 'react-transition-group';
import './app.css';

class App extends Component {

  static propTypes = {
    isAuthenticated: PropTypes.bool
  }

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    
    return (
      <Provider store = {store}>
        <BrowserRouter>
        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key = {location.key}
              timeout={600}
              classNames="fade"
              >
                <div className = "App">
                <NavBar />
                <div className = "mainBody">
                  <Switch location = {location}>
                    <Route exact path="/" component={Home} /> 
                    <Route exact path="/charts" component={Charts} />
                    <Route exact path="/charts/1" 
                      render = {(routeProps) => (
                        <Chart1 legendPosition="top"/>
                      )} /> 
                    <Route exact path="/graphs" component={Graphs} />
                    <Route exact path="/login" component={Auth} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/contact" component={Contact} />
                    <Route render = {() => <div>Page Not Found</div>} />
                  </Switch>   
                </div>
                <Footer />
                </div>
            </CSSTransition>
          </TransitionGroup>
            )} />
            
        </BrowserRouter>
      </Provider>

    )
  }
}

export default App;