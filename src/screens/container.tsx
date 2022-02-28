import React from 'react';
import {StatusBar} from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';
import {TransitionSpecs} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import ScreenHome from './home';
import ScreenResume from './resume';
import ScreenPortfolio from './portfolio';
import {iOSColors} from 'react-native-typography';
import {PortfolioItem} from 'res/portfolios';
import ThemeSwitcher from 'component/ThemeSwitcher';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const defaultOptions: StackNavigationOptions = {
  headerShown: false,
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
  headerRight: () => <ThemeSwitcher />,
};

StatusBar.setTranslucent(true);
StatusBar.setBackgroundColor('transparent');

export type RootContainerProps = {
  Home: undefined;
  ResumeModal: undefined;
  Resume: undefined;
  Portfolio: {portfolioItem: PortfolioItem};
};

const ResumeModal = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Resume"
      component={ScreenResume}
      options={defaultOptions}
    />
    <Stack.Screen
      name="Portfolio"
      component={ScreenPortfolio}
      options={defaultOptions}
    />
  </Stack.Navigator>
);

const RootContainer = () => {
  const theme = useSelector((state: StateRoot) => state.settings.theme);

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={ScreenHome}
            options={defaultOptions}
          />
          <Stack.Screen
            name="ResumeModal"
            component={ResumeModal}
            options={{
              ...defaultOptions,
              ...TransitionPresets.ModalPresentationIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const darkTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    background: iOSColors.black,
    text: iOSColors.white,
    border: iOSColors.black,
  },
};

const lightTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    background: iOSColors.white,
  },
};

export default RootContainer;
