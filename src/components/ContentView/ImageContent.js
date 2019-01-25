// Still have bug with android devices
import * as React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import AvatarView from './AvatarView';

type Props = {
  source: string,
  style?: object,
  avatar?: boolean,
  imageStyle?: object
};

const screenWidth = Dimensions.get('window').width;

class ImageContent extends React.Component<Props> {
  static defaultProps = {
    avatar: false,
    style: {},
    imageStyle: {}
  };

  render() {
    const { source, avatar, style, imageStyle } = this.props;
    return (
      <View
        style={[
          !avatar && {
            width: '100%',
            height: '100%',
            paddingTop: 30
          },
          style
        ]}
      >
        {avatar ? (
          <AvatarView source={source} />
        ) : (
          <Image
            style={[
              {
                width: 'auto',
                height: '100%'
              },
              imageStyle
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
