// @flow

import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  style?: Style,
  children?: React.Node,
};
const screenWidth = Dimensions.get('window').width;
class SlideItem extends React.Component<Props> {
  static defaultProps = {
    style: {},
  };
  render() {
    const { style, children } = this.props;
    return <View style={[styles.itemContainer, style]}>{children}</View>;
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    height: '100%',
    width: screenWidth,
  },
});

export default SlideItem;
