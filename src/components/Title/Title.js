/// Trouble with font family.

import * as React from 'react';
import { Text } from 'react-native';

type Props = {
  style?: object
};

class Title extends React.Component<Props> {
  static defaultProps = {
    style: { fontSize: 32, fontWeight: 'bold', color: 'black' }
  };
  render() {
    return <Text style={this.props.style}>{this.props.children}</Text>;
  }
}

export default Title;
