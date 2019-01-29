// @flow
import * as React from 'react';
import { View, Text } from 'react-native';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  style?: Style,
  children?: React.Node,
};

class Title extends React.Component<Props> {
  static defaultProps = {
    style: {},
  };
  render() {
    const { style, children } = this.props;
    return (
      <Text style={[{ fontSize: 32, fontWeight: 'bold', color: 'black' }, style]}>{children}</Text>
    );
  }
}

export default Title;
