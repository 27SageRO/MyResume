import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import settingsReducer from './settings';

const rootReducer = combineReducers({
  settings: settingsReducer,
});

const persistedReducer = persistReducer(
  {version: 0, key: 'settings', storage: AsyncStorage},
  rootReducer,
);

function configureStore() {
  let enhancer;
  if (__DEV__) {
    const createFlipperDebugger = require('redux-flipper').default;
    enhancer = composeWithDevTools(applyMiddleware(createFlipperDebugger()));
  } else {
    enhancer = compose(applyMiddleware());
  }
  return createStore(persistedReducer, enhancer);
}

export const store = configureStore();
export const persistor = persistStore(store);
