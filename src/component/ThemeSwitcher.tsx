import React, {memo} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {iOSColors} from 'react-native-typography';
import {useDispatch, useSelector} from 'react-redux';
import {postAppTheme} from 'store/settings';

const ThemeSwitcher = () => {
  const theme = useSelector((state: StateRoot) => state.settings.theme);
  const dispatch = useDispatch();

  const toggleSwitch = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(postAppTheme({theme: nextTheme}));
  };

  return (
    <Pressable
      style={styles.container}
      onPress={toggleSwitch}
      android_ripple={{color: iOSColors.lightGray}}>
      <Text style={styles.text}>{theme === 'dark' ? '🌜' : '🌞'}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 7,
  },
  text: {
    fontSize: 18,
  },
});

export default memo(ThemeSwitcher);
