import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

type Props = {
  source: string,
  style?: object,
  size?: number
};

class Avatar extends React.Component<Props> {
  static defaultProps = {
    size: 116,
    style: {}
  };
  render() {
    return (
      <Image
        source={this.props.source}
        style={[
          {
            height: this.props.size,
            width: this.props.size,
            borderRadius: this.props.size / 2
          },
          this.props.style
        ]}
      />
    );
  }
}

export default Avatar;
