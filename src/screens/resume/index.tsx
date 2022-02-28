import {StackNavigationProp, TransitionPresets} from '@react-navigation/stack';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {iOSColors, material, systemWeights} from 'react-native-typography';
import {RootContainerProps} from 'screens/container';
import {ScrollView} from 'react-native-gesture-handler';
import {useTheme} from 'screens/hooks';
import PortfolioCards from './components/PortfolioCards';

type Props = {
  navigation: StackNavigationProp<RootContainerProps, 'Resume'>;
};

const ScreenResume = ({navigation}: Props) => {
  const styles = useStyles();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Résumé',
      ...TransitionPresets.SlideFromRightIOS,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={[styles.container, styles.bg]}>
        <View style={styles.sect}>
          <Text style={styles.h1}>Rogec John Pecarana</Text>
          <Text style={styles.h2}>Block 13 lot 6 San Isidro Labrador</Text>
          <Text style={styles.h2}>Indangan, Davao City</Text>
          <Text style={styles.h2}>(+63) 915 556 6531</Text>
        </View>
        <View style={styles.sect}>
          <Text style={styles.h1}>Summary</Text>
          <Text style={styles.h2}>
            Dynamic and detailed oriented mobile app developer with over 4 years
            of experience in producing mobile apps. Excellent problem-solving
            skills and ability to perform well in a team. Seeking to help your
            company develop your products as a mobile app developer, as well as
            grow and develop my own skills as a coder.
          </Text>
        </View>
        <View style={styles.sect}>
          <Text style={styles.h1}>Key Skills and Competencies</Text>
          <Text style={styles.h2}>- 4 years of experience in React Native</Text>
          <Text style={styles.h2}>
            - Proficiency in JavaScript language and its nuances
          </Text>
          <Text style={styles.h2}>
            - Experience with document request model, REST APIs, and offline
            storage mechanisms
          </Text>
          <Text style={styles.h2}>
            - Experience with native build tools (like Android Studio, Xcode,
            Gradle, etc)
          </Text>
          <Text style={styles.h2}>
            - Familiarity with automated testing tools (like Detox, Jest, Mocha,
            etc)
          </Text>
          <Text style={styles.h2}>
            - Knowledge of debugging dependency conflicts, and third-party
            libraries
          </Text>
          <Text style={styles.h2}>
            - Knowledge of source control systems (Git, Merging, Branching, Pull
            Requests, etc.)
          </Text>
        </View>

        <View style={styles.sect}>
          <Text style={styles.h1}>Educational Background</Text>
          <Text style={styles.h2}>University Of Southeastern Philippines</Text>
          <Text style={styles.h2}>
            Bachelor of Science in Information Technology
          </Text>
          <Text style={styles.h3}>2013 - 2017</Text>
        </View>

        <View style={styles.sect}>
          <Text style={styles.h1}>Work Experience</Text>
          <Text style={styles.h2}>Viseo Philippines</Text>
          <Text style={styles.h2}>React Native Developer</Text>
          <Text style={styles.h3}>Aug 2020 - Sept 2021</Text>

          <Text style={[styles.h2, {marginTop: 8}]}>Gad.Ai</Text>
          <Text style={styles.h2}>Full Stack Developer</Text>
          <Text style={styles.h3}>Aug 2019 - Apr 2020</Text>

          <Text style={[styles.h2, {marginTop: 8}]}>Gears of Webee</Text>
          <Text style={styles.h2}>Mobile App Developer</Text>
          <Text style={styles.h3}>May 2018 - Aug 2019</Text>
        </View>

        <View style={styles.sect}>
          <Text style={styles.h1}>Extra Curricular Activities</Text>
          <Text style={styles.h2}>
            - Y4iT Youth Congress on Information Technology UP Diliman{' '}
            <Text style={styles.h3}>2016</Text>
          </Text>
          <Text style={styles.h2}>
            - One of the top 3 at PLDT88 VisMin Hackathon{' '}
            <Text style={styles.h3}>Nov 2016</Text>
          </Text>
          <Text style={styles.h2}>
            - MSITS Programming Competition Olympiad{' '}
            <Text style={styles.h3}>Jan 2015</Text>
          </Text>
        </View>

        <PortfolioCards />
      </ScrollView>
    </View>
  );
};

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg: {
      backgroundColor: theme.background,
    },
    sect: {
      margin: 16,
    },
    h1: {
      ...theme.subheading,
      ...systemWeights.semibold,
    },
    h2: {
      ...theme.body1,
    },
    h3: {
      ...theme.caption,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 16,
      left: 0,
      right: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: iOSColors.white,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 4,
      elevation: 3,
    },
    buttonText: {
      ...material.body1Object,
      ...systemWeights.light,
    },
  });
};

export default ScreenResume;
