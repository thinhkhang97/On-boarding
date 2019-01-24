/// Trouble with font family.

import * as React from 'react';
import { Text } from 'react-native';

type Props = {
  style?: object
};

class Description extends React.Component<Props> {
  static defaultProps = {
    style: {}
  };
  render() {
    return (
      <Text style={[{ fontSize: 16, color: '#7f8da2' }, this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

export default Description;
