/// Trouble with font family.

import * as React from 'react';
import { View, Text } from 'react-native';

type Props = {
  numberStyle?: object,
  titleStyle?: object,
  number: string
};

class MixTitle extends React.Component<Props> {
  static defaultProps = {
    numberStyle: {
      fontSize: 32,
      fontWeight: 'bold',
      color: 'black'
    },
    titleStyle: { fontSize: 20, color: 'black' }
  };
  render() {
    const { number, title, numberStyle, titleStyle } = this.props;
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Text style={numberStyle}>{number}</Text>
        <Text style={titleStyle}>{title}</Text>
      </View>
    );
  }
}

export default MixTitle;
