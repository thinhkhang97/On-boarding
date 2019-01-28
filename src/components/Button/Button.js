// @flow

import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  style?: View.propTypes.style,
  onPress: () => mixed,
  children: React.Node,
};

class Button extends React.Component<Props> {
  static defaultProps = {
    style: {},
  };
  render() {
    const { onPress, style, children } = this.props;
    return (
      <TouchableOpacity style={style} onPress={() => onPress && onPress()}>
        {children}
      </TouchableOpacity>
    );
  }
}

export default Button;
