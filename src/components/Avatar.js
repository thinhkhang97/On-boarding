import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

type Props = {
  source: string,
  style?: object
};

class Avatar extends React.Component<Props> {
  static defaultObject = {
    style: {
      height: 116,
      width: 116,
      borderRadius: 116 / 2
    }
  };
  render() {
    return <Image source={this.props.source} style={this.props.style} />;
  }
}

export default Avatar;
