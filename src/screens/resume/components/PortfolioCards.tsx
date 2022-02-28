import React, {memo} from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {iOSColors, systemWeights} from 'react-native-typography';
import {PortfolioItem} from 'res/portfolios';
import {useTheme} from 'screens/hooks';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootContainerProps} from 'screens/container';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import R from 'res/R';

const PortfolioCards = () => {
  const styles = useStyles();
  const navigation: NavigationProp<RootContainerProps> = useNavigation();

  const renderCard = ({item}: {item: PortfolioItem}) => {
    return (
      <View style={styles.card}>
        <View style={styles.header}>
          <Image style={styles.logo} source={item.logo} />
          <View>
            <Text style={styles.title}>{`${item.title}`}</Text>
            <View style={styles.chips}>
              {item.categories.map(v => (
                <Text key={v} style={styles.chip}>
                  {v}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Text style={styles.body} ellipsizeMode={'tail'} numberOfLines={3}>
          {item.description}
        </Text>
        <Pressable
          style={styles.button}
          android_ripple={{color: iOSColors.lightGray}}
          onPress={() =>
            navigation.navigate('Portfolio', {portfolioItem: item})
          }>
          <Text style={styles.buttonText}>View More</Text>
          <Icon style={styles.buttonIcon} name="chevron-right" />
        </Pressable>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.h1}>Published Apps 🚀</Text>
      </View>
      <Carousel
        data={R.portfolios}
        renderItem={renderCard}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        firstItem={R.portfolios.length - 1}
        layout="stack"
        useScrollView
      />
    </View>
  );
};

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = 250;
const ITEM_HEIGHT = 200;

const useStyles = () => {
  const theme = useTheme();
  return StyleSheet.create({
    container: {
      marginVertical: 16,
    },
    h1: {
      ...theme.subheading,
      ...systemWeights.semibold,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    card: {
      width: ITEM_WIDTH,
      height: ITEM_HEIGHT,
      backgroundColor: theme.card,
      borderRadius: 4,
      elevation: 4,
      marginVertical: 18,
    },
    header: {
      flexDirection: 'row',
      margin: 16,
    },
    logo: {
      height: 50,
      width: 50,
      borderRadius: 4,
    },
    title: {
      ...theme.body1,
      ...systemWeights.semibold,
      marginLeft: 8,
    },
    body: {
      flex: 1,
      ...theme.body1,
      marginHorizontal: 16,
    },
    chips: {
      flexDirection: 'row',
    },
    chip: {
      ...theme.caption,
      backgroundColor: theme.chip,
      fontSize: 11,
      color: theme.text,
      paddingVertical: 3,
      paddingHorizontal: 8,
      borderRadius: 100,
      marginLeft: 4,
      marginTop: 4,
    },
    button: {
      flexDirection: 'row',
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.background,
      paddingVertical: 8,
      paddingHorizontal: 12,
      margin: 8,
      borderRadius: 4,
    },
    buttonText: {
      ...theme.caption,
    },
    buttonIcon: {
      fontSize: 18,
      color: theme.text,
    },
  });
};

export default memo(PortfolioCards);
