import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './navfragment.scss';

class Guestlink extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            login: false,
            register: false,
            menu: this.props.menu
        }
    }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        menu: PropTypes.bool,
        login: PropTypes.bool
      }

  render() {
        return (
        <Fragment>
            <div className = 'nav-items'>
                <div className = {'guest-fragment' + (this.state.menu ? ' stacked': '')}>
                    <Link to="/login">
                        <li className={"nav-item" + (this.props.login ? " activelink" : "")}>
                            Login
                        </li>
                    </Link>
                    <Link to="/register">
                        <li className={"nav-item" + (this.props.register ? " activelink" : "")}>
                            Register
                        </li>
                    </Link>
                </div>
            </div>
        </Fragment>
        )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  login: state.route.login,
  register: state.route.register
})

export default connect(
  mapStateToProps,
  {  }
)(Guestlink);

