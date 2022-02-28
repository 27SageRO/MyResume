import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RootContainer from 'screens/container';
import {persistor, store} from 'store/store';

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
};

export default Root;
