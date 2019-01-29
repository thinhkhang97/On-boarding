// @flow

import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  source: {
    uri: string,
  },
  style: Style,
  size: number,
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
