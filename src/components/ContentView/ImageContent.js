// @flow
// Still have bug with android devices
import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import AvatarView from './AvatarView';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  source: {
    uri: string,
  },
  style?: Style,
  avatar?: boolean,
  imageStyle?: Style,
  avatarBorderColor?: string,
};

const screenWidth = Dimensions.get('window').width;

class ImageContent extends React.Component<Props> {
  static defaultProps = {
    avatar: false,
    style: {},
    imageStyle: {},
  };

  render() {
    const { source, avatar, style, imageStyle, avatarBorderColor } = this.props;
    return (
      <View
        style={[
          !avatar && {
            width: '100%',
            height: '100%',
            paddingTop: 30,
          },
          style,
        ]}
      >
        {avatar ? (
          <AvatarView borderColor={avatarBorderColor} source={source} />
        ) : (
          <Image
            style={[
              {
                width: 'auto',
                height: '100%',
              },
              imageStyle,
            ]}
            source={source}
            resizeMode="contain"
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ImageContent;
