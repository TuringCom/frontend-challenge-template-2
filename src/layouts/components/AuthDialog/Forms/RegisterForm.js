import React, { Component } from 'react';
import { Button, InputAdornment, withStyles } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PasswordIcon from '@material-ui/icons/VpnKey';
import NameIcon from '@material-ui/icons/Person';
import Formsy from 'formsy-react';
import PropTypes from 'prop-types';
import { TextFieldFormsy } from '../../../../components/Formsy';
import styles from './styles';

/**
 *
 *
 * @class RegisterForm
 * @extends {Component}
 */
class RegisterForm extends Component {
  form = React.createRef();

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    requestLoading: PropTypes.bool.isRequired,
  };

  /**
   *
   *
   * @returns
   *
   * @memberOf RegisterForm
   */
  render() {
    const { handleInputChange, onSubmit, requestLoading } = this.props;
    return (
      <div className="w-full flex flex-row justify-center">
        <Formsy
          onValidSubmit={() => onSubmit()}
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          ref={form => (this.form = form)}
          className="bg-white shadow-md rounded px-8 pt-6 mt-6 pb-8 mb-4"
          id="registerForm"
        >
          <TextFieldFormsy
            className="w-full mb-4"
            type="text"
            name="name"
            label="Name"
            onChange={handleInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <NameIcon className="text-20" color="action" />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            helperText=""
            required
          />

          <TextFieldFormsy
            className="w-full mb-4"
            type="email"
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

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="w-full mx-auto normal-case"
            aria-label="REGISTER"
            value="legacy"
            id="btnFormRegister"
          >
            {requestLoading ? 'please wait ...' : 'Register'}
          </Button>
        </Formsy>
      </div>
    );
  }
}

export default withStyles(styles)(RegisterForm);
