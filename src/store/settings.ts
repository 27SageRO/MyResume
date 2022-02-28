import update from 'immutability-helper';
import {Appearance} from 'react-native';
import {createAction, createReducer} from './toolkit';

export const postAppTheme = createAction<{theme: 'dark' | 'light'}>(
  'settings/postAppTheme',
);

const initialState: StateSettings = {
  theme: Appearance.getColorScheme() ?? 'dark',
};

const settingsReducer = createReducer(initialState, builder => {
  builder.addCase(postAppTheme, (state, action) => {
    return update(state, {theme: {$set: action.payload.theme}});
  });
});

export default settingsReducer;
