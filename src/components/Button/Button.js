// @flow

import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  style?: Style,
  onPress: () => mixed,
  children?: React.Node,
};

class Button extends React.Component<Props> {
  static defaultProps = {
    onPress: () => {},
  };

  render() {
    const { style, children } = this.props;
    return (
      <TouchableOpacity style={style} onPress={() => this.props.onPress()}>
        {children}
      </TouchableOpacity>
    );
  }
}

export default Button;
