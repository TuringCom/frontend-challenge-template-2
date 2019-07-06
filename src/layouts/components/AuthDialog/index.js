import React, { Component } from 'react';
import {
  Paper,
  Dialog,
  DialogContent,
  withStyles,
  Link,
} from '@material-ui/core';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Close from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import * as customerActions from '../../../store/actions/customer';
import LoginForm from './Forms/LoginForm';
import RegisterForm from './Forms/RegisterForm';
import * as Actions from '../../../store/actions/alerts';
import styles from './styles';

const PaperComponent = props => {
  return (
    <Paper
      {...props}
      style={{ width: 'auto', maxWidth: '450px', height: 'auto' }}
    />
  );
};

/**
 *
 * @class AuthDialog
 * @extends {Component}
 */
class AuthDialog extends Component {
  static propTypes = {
    hideAuth: PropTypes.func.isRequired,
    switchTab: PropTypes.func.isRequired,
    submitLogin: PropTypes.func.isRequired,
    submitRegister: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired,
    register: PropTypes.bool.isRequired,
    open: PropTypes.bool.isRequired,
    requestLoading: PropTypes.bool.isRequired,
  };

  state = {
    name: '',
    email: '',
    password: '',
  };

  handleClose = () => {
    const { hideAuth } = this.props;
    hideAuth();
  };

  handleRegisterNav = () => {
    const { switchTab } = this.props;
    switchTab(true);
  };

  handleLoginNav = () => {
    const { switchTab } = this.props;
    switchTab(false);
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = () => {
    const { submitLogin } = this.props;
    const { email, password } = this.state;
    return submitLogin({ email, password });
  };

  handleFacebookLogin = access_token => {
    const { submitFacebookLogin } = this.props;
    return submitFacebookLogin({ access_token });
  };

  handleRegister = () => {
    const { submitRegister } = this.props;
    const { email, name, password } = this.state;
    return submitRegister({ email, name, password });
  };

  /**
   *
   * @returns
   *
   * @memberOf AuthDialog
   */
  render() {
    const { classes, register, open, requestLoading } = this.props;
    return (
      <div>
        <Dialog
          open={open}
          onClose={this.handleClose}
          PaperComponent={PaperComponent}
          maxWidth="lg"
          aria-labelledby="draggable-dialog-title"
        >
          <DialogContent style={{ overflow: 'hidden' }}>
            <div className="flex mb-4 h-8">
              <div className="w-3/4">
                {register && (
                  <span className={classes.titleText}>Register / Sign Up</span>
                )}
                {!register && <span className={classes.titleText}>Log In</span>}
              </div>
              <div className="w-1/4 flex justify-end">
                <Close
                  onClick={this.handleClose}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>
            <div className="w-full flex flex-grow flex-col">
              {register ? (
                <RegisterForm
                  handleInputChange={this.handleInputChange}
                  onSubmit={this.handleRegister}
                  requestLoading={requestLoading}
                />
              ) : (
                <LoginForm
                  handleInputChange={this.handleInputChange}
                  handleFacebookLogin={this.handleFacebookLogin}
                  onSubmit={this.handleLogin}
                  requestLoading={requestLoading}
                />
              )}
            </div>
            <div>
              <div className="w-full flex justify-center">
                {register && (
                  <Link
                    color="primary"
                    className={classes.submitButtonText}
                    onClick={this.handleLoginNav}
                    style={{ color: 'red' }}
                  >
                    Go to Login
                  </Link>
                )}
              </div>
              <div className="w-full flex justify-center">
                {!register && (
                  <Link
                    color="primary"
                    className={classes.submitButtonText}
                    onClick={this.handleRegisterNav}
                    style={{ color: 'red', marginLeft: '3px' }}
                  >
                    Register / Sign Up
                  </Link>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      hideAuth: Actions.hideAuth,
      switchTab: Actions.switchTab,
      submitRegister: customerActions.submitRegister,
      submitLogin: customerActions.submitLogin,
      submitFacebookLogin: customerActions.submitFacebookLogin,
    },
    dispatch,
  );
};

const mapStateToProps = ({ alerts, customer }) => {
  return {
    open: alerts.auth.open,
    register: alerts.auth.register,
    requestLoading: customer.auth.loading,
  };
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthDialog),
);
