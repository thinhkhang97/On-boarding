/// Trouble with font family.

import * as React from 'react';
import { Text } from 'react-native';

type Props = {
  style?: object
};

class Title extends React.Component<Props> {
  static defaultProps = {
    style: {}
  };
  render() {
    return (
      <Text
        style={[
          { fontSize: 32, fontWeight: 'bold', color: 'black' },
          this.props.style
        ]}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default Title;
