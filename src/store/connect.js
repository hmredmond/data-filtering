import React from 'react';
import { Consumer } from './store';

export const connect = mapStateToProps => {
  return WrappedComponent => {
    return props => (
      <Consumer select={[mapStateToProps]}>
        {state => <WrappedComponent {...props} {...state} />}
      </Consumer>
    );
  };
};
