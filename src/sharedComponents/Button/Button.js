import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  style: object
};

class Button extends React.Component<Props> {
  static defaultProps = {
    style: {}
  };
  render() {
    return (
      <TouchableOpacity
        style={this.props.style}
        onPress={() => this.props.onPress()}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default Button;
