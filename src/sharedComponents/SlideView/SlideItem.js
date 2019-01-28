// @flow
import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

type Props = {
  key: string,
  style?: View.propTypes.style,
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
