// @flow
/// Trouble with font family.

import * as React from 'react';
import { View, Text } from 'react-native';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  style?: Style,
  children?: React.Node,
};

class Description extends React.Component<Props> {
  static defaultProps = {
    style: {},
  };
  render() {
    const { style, children } = this.props;
    return <Text style={[{ fontSize: 16, color: '#7f8da2' }, style]}>{children}</Text>;
  }
}

export default Description;
