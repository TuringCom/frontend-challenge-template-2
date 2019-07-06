import axios from 'axios';
import EventEmitter from '../utils/EventEmitter';
import systemConfig from '../config/system';

/**
 *
 *
 * @class customerService
 * @extends {EventEmitter}
 */
class customerService extends EventEmitter {
  /**
   * Creates an instance of customerService.
   * @memberOf customerService
   */
  constructor() {
    super();
    this.setDefaults();
  }

  setDefaults = () => {
    axios.defaults.headers.common['Content-Type'] = 'application/json';
    axios.defaults.headers.common['Accept'] = 'application/json';
  };

  registerUser = ({ email, password, name }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.serverBaseUrl + '/customers', {
          email,
          password,
          name,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  loginUser = ({ email, password }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.serverBaseUrl + '/customers/login', {
          email,
          password,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };

  facebookLogin = ({ access_token }) => {
    return new Promise((resolve, reject) => {
      axios
        .post(systemConfig.serverBaseUrl + '/customers/facebook', {
          access_token,
        })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  };
}

const instance = new customerService();

export default instance;
