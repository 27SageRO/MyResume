import {iOSColors, material} from 'react-native-typography';
import {useSelector} from 'react-redux';

const useTheme = () => {
  const theme = useSelector((state: StateRoot) => state.settings.theme);
  return {
    background: theme === 'dark' ? iOSColors.black : iOSColors.white,
    card: theme === 'dark' ? 'rgb(28,28,30)' : iOSColors.white,
    text: theme === 'dark' ? iOSColors.white : iOSColors.black,
    chip: theme === 'dark' ? iOSColors.black : iOSColors.lightGray,
    button:
      theme === 'dark' ? material.buttonWhiteObject : material.buttonObject,
    caption:
      theme === 'dark' ? material.captionWhiteObject : material.captionObject,
    body1: theme === 'dark' ? material.body1WhiteObject : material.body1Object,
    body2: theme === 'dark' ? material.body2WhiteObject : material.body2Object,
    subheading:
      theme === 'dark'
        ? material.subheadingWhiteObject
        : material.subheadingObject,
    title: theme === 'dark' ? material.titleWhiteObject : material.titleObject,
    headline:
      theme === 'dark' ? material.headlineWhiteObject : material.headlineObject,
    display1:
      theme === 'dark' ? material.display1WhiteObject : material.display1Object,
    display2:
      theme === 'dark' ? material.display2WhiteObject : material.display2Object,
    display3:
      theme === 'dark' ? material.display3WhiteObject : material.display3Object,
    display4:
      theme === 'dark' ? material.display4WhiteObject : material.display4Object,
  };
};

export {useTheme};
