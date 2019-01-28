// @flow
import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

type Props = {
  source: string,
  style?: View.propTypes.style,
  size?: number,
};

class Avatar extends React.Component<Props> {
  static defaultProps = {
    size: 116,
    style: {},
  };
  render() {
    const { size, source, style } = this.props;
    return (
      <Image
        source={source}
        style={[
          {
            height: size,
            width: size,
            borderRadius: size / 2,
          },
          style,
        ]}
      />
    );
  }
}

export default Avatar;
