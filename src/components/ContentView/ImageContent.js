// Still have bug with android devices
import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AvatarView from './AvatarView';

type Props = {
  source: string,
  style?: object,
  avatar?: boolean
};

class ImageContent extends React.Component<Props> {
  static defaultProps = {
    avatar: false,
    style: {}
  };
  render() {
    const { source, avatar, style } = this.props;
    return (
      <View
        style={[
          !avatar && { width: '100%', height: '100%', backgroundColor: 'blue' },
          style
        ]}
      >
        {avatar ? (
          <AvatarView source={source} />
        ) : (
          <Image style={{ flex: 1, backgroundColor: 'red' }} source={source} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default ImageContent;
