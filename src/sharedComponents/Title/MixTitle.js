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
    numberStyle: {},
    titleStyle: {}
  };
  render() {
    const { title, subTitle, numberStyle, titleStyle } = this.props;
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: 15,
          marginRight: 15
        }}
      >
        <Text
          style={[
            {
              fontSize: 32,
              fontWeight: 'bold',
              color: 'black'
            },
            numberStyle
          ]}
        >
          {title}
        </Text>
        <Text style={[{ fontSize: 20, color: 'black' }, titleStyle]}>
          {subTitle}
        </Text>
      </View>
    );
  }
}

export default MixTitle;
