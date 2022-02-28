import React, {memo} from 'react';
import {Image, ImageProps} from 'react-native';

type Props = {
  width: number;
} & ImageProps;

const AutoHeightImage = ({width, ...props}: Props) => {
  const [state, setstate] = React.useState(0);
  return (
    <Image
      {...props}
      style={[props.style, {width: width, height: state}]}
      onLoad={evt => {
        setstate(
          (evt.nativeEvent.source.height / evt.nativeEvent.source.width) *
            width,
        );
      }}
    />
  );
};

export default memo(AutoHeightImage);
