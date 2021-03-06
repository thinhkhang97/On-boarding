// @flow

import * as React from 'react';
import { View, Text } from 'react-native';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  subTitleStyle?: Style,
  titleStyle?: Style,
  title: string,
  subTitle: string,
};

class MixTitle extends React.Component<Props> {
  render() {
    const { title, subTitle, subTitleStyle, titleStyle } = this.props;
    return (
      <View
        style={{
          display: 'flex',
          alignItems: 'center',
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <Text
          style={[
            {
              fontSize: 32,
              fontWeight: 'bold',
              color: 'black',
            },
            titleStyle,
          ]}
        >
          {title}
        </Text>
        <Text style={[{ fontSize: 20, color: 'black' }, subTitleStyle]}>{subTitle}</Text>
      </View>
    );
  }
}

export default MixTitle;
