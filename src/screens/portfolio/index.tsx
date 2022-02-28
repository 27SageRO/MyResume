import {StackNavigationProp, TransitionPresets} from '@react-navigation/stack';
import React, {memo, useLayoutEffect, useState} from 'react';
import {
  Image,
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {iOSColors, systemWeights} from 'react-native-typography';
import {RootContainerProps} from 'screens/container';
import {ScrollView} from 'react-native-gesture-handler';
import {RouteProp} from '@react-navigation/native';
import {useTheme} from 'screens/hooks';
import AutoHeightImage from 'component/AutoHeightImage';
import PhotoView from 'react-native-photo-view';
import R from 'res/R';

type Props = {
  navigation: StackNavigationProp<RootContainerProps, 'Portfolio'>;
  route: RouteProp<RootContainerProps, 'Portfolio'>;
};

const ScreenPortfolio = ({navigation, route}: Props) => {
  const [imgViewer, setImgViewer] = useState(-1);

  const styles = useStyles();
  const item = route.params.portfolioItem;

  const getRandomRolor = () => {
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
    }
    return color;
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: item.title,
      ...TransitionPresets.SlideFromRightIOS,
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View style={styles.center}>
          <Image style={styles.logo} source={item.logo} />
        </View>
        <View style={styles.sect}>
          <Text style={styles.h2}>{item.description}</Text>
          <View style={styles.chips}>
            {item.stackUsed.map(v => (
              <Text
                key={v}
                style={[styles.chip, {backgroundColor: getRandomRolor()}]}>
                {v}
              </Text>
            ))}
          </View>
        </View>
        <ScrollView
          contentContainerStyle={styles.screenContainer}
          showsHorizontalScrollIndicator={false}
          horizontal>
          {item.screens.map((v, i) => (
            <Pressable key={i.toString()} onPress={() => setImgViewer(v)}>
              <AutoHeightImage style={styles.screen} source={v} width={250} />
            </Pressable>
          ))}
        </ScrollView>
        <View style={styles.center}>
          {item.androidLink && (
            <Pressable
              onPress={() => {
                item.androidLink && Linking.openURL(item.androidLink);
              }}>
              <AutoHeightImage
                style={styles.link}
                width={180}
                source={R.img.btn_googleplay}
              />
            </Pressable>
          )}
          {item.iosLink && (
            <Pressable
              onPress={() => {
                item.iosLink && Linking.openURL(item.iosLink);
              }}>
              <AutoHeightImage
                style={styles.link}
                width={180}
                source={R.img.btn_appstore}
              />
            </Pressable>
          )}
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        visible={imgViewer >= 0}
        onRequestClose={() => setImgViewer(-1)}
        transparent>
        <View style={styles.modal}>
          <PhotoView
            source={imgViewer}
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            style={{height: '100%', width: '100%'}}
          />
        </View>
      </Modal>
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
    logo: {
      height: 80,
      width: 80,
      borderRadius: 4,
      marginTop: 16,
    },
    screenContainer: {
      paddingRight: 16,
      paddingBottom: 16,
    },
    screen: {
      marginLeft: 16,
      borderRadius: 4,
    },
    link: {
      margin: 8,
    },
    modal: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,.8)',
    },
    chips: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 8,
    },
    chip: {
      ...theme.caption,
      backgroundColor: theme.chip,
      fontSize: 11,
      color: iOSColors.white,
      paddingVertical: 3,
      paddingHorizontal: 8,
      borderRadius: 100,
      marginTop: 7,
      marginRight: 4,
    },
  });
};

export default memo(ScreenPortfolio);
