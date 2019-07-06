import React, { Component } from 'react';
import { Button, InputAdornment, withStyles } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import Formsy from 'formsy-react';
import FacebookLogin from 'react-facebook-login';
import PropTypes from 'prop-types';
import { TextFieldFormsy } from '../../../../components/Formsy';
import styles from './styles';
import './styles.css';

/**
 *
 * @class LoginForm
 * @extends {Component}
 */
class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    requestLoading: PropTypes.bool.isRequired,
    handleFacebookLogin: PropTypes.func.isRequired,
  };
  form = React.createRef();

  /**
   *
   * @returns
   * @memberOf LoginForm
   */
  render() {
    const {
      onSubmit,
      handleInputChange,
      requestLoading,
      handleFacebookLogin,
    } = this.props;
    return (
      <div className="w-full flex flex-row justify-center">
        <Formsy
          ref={form => (this.form = form)}
          className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
          id="signInForm"
          onSubmit={() => onSubmit()}
        >
          <TextFieldFormsy
            className="w-full mb-4"
            type="text"
            name="email"
            label="Email"
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <EmailIcon className="text-20" color="action" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            helperText=""
            required
          />

          <TextFieldFormsy
            className="w-full mb-4"
            type="password"
            name="password"
            label="Password"
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PasswordIcon className="text-20" color="action" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            helperText=""
            required
          />

          <div className="buttonsHolder">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="w-full logInBtn"
              aria-label="LOG IN"
              value="legacy"
              id="btnFormSignIn"
            >
              {requestLoading ? 'please wait ...' : 'Log In'}
            </Button>

            <div>- or -</div>

            <div className="socialButtonsHolder">
              <div>
                {/*TODO replace with Turing appID */}
                <FacebookLogin
                  appId="2124513424515390"
                  autoLoad={false}
                  cssClass="w-full btnGoogle MuiButtonBase-root-226 MuiButton-root-200 MuiButton-contained-211 MuiButton-containedPrimary-216 MuiButton-raised-214 MuiButton-raisedPrimary-215"
                  fields="name,email,picture"
                  onClick={() => console.log('componentClicked')}
                  callback={response =>
                    handleFacebookLogin(response.accessToken)
                  }
                />
              </div>
            </div>
          </div>
        </Formsy>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
