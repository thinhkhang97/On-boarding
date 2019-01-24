import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  style: object,
  onPress: () => mixed
};

class Button extends React.Component<Props> {
  static defaultProps = {
    style: {}
  };
  render() {
    const { onPress } = this.props;
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={() => onPress && onPress()}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default Button;
