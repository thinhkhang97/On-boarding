/// Trouble with font family.
// @flow
import * as React from 'react';
import { View, Text } from 'react-native';

type Props = {
  style?: View.propTypes.style,
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
