import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { injectReducer } from './index';

const withReducer = (key, reducer) => WrappedComponent =>
  class extends React.PureComponent {
    constructor(props) {
      super(props);
      injectReducer(key, reducer);
    }

    render() {
      return (
        <ReactReduxContext.Consumer>
          {({ store, storeState }) => {
            return storeState[key] ? (
              <WrappedComponent {...this.props} />
            ) : null;
          }}
        </ReactReduxContext.Consumer>
      );
    }
  };

export default withReducer;
