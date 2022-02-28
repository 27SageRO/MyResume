import {StackNavigationProp} from '@react-navigation/stack';
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  Easing,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {iOSColors, material, systemWeights} from 'react-native-typography';
import {RootContainerProps} from 'screens/container';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import R from 'res/R';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

type Props = {
  navigation: StackNavigationProp<RootContainerProps, 'Home'>;
};

const ScreenHome = ({navigation}: Props) => {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(anim, {
          toValue: -32,
          duration: 1500,
          useNativeDriver: true,
          easing: Easing.ease,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  return (
    <ImageBackground style={styles.container} source={R.img.wall}>
      <View style={styles.backEffect} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          Rogec John Pecarana - Mobile App Developer
        </Text>
        <View style={styles.profile}>
          <Image style={styles.picture} source={R.img.profile} />
          <Text style={styles.summary}>
            {R.strings.professionalSummaryShort}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <AnimatedPressable
            style={[styles.button, {transform: [{translateY: anim}]}]}
            onPress={() => navigation.navigate('ResumeModal')}
            android_ripple={{color: iOSColors.white}}>
            <Text style={styles.buttonText}>See Résumé</Text>
            <Icon name="arrow-down-drop-circle" color="#FFF" size={18} />
          </AnimatedPressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const pictureSize = 120;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backEffect: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  title: {
    ...material.body1WhiteObject,
    ...systemWeights.light,
    margin: 16,
  },
  profile: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summary: {
    ...material.captionWhiteObject,
    ...systemWeights.light,
    width: pictureSize + 120,
    margin: 16,
  },
  picture: {
    height: pictureSize,
    width: pictureSize,
    borderRadius: pictureSize / 2,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 4,
  },
  buttonText: {
    ...material.body1WhiteObject,
    ...systemWeights.light,
  },
});

export default ScreenHome;
