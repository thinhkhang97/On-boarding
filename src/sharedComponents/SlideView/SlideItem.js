import * as React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

type Props = {
  key: string,
  style?: object
};
const screenWidth = Dimensions.get('window').width;
class SlideItem extends React.Component<Props> {
  static defaultProps = {
    style: {}
  };
  render() {
    return (
      <View style={[styles.itemContainer, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    height: '100%',
    width: screenWidth
  }
});

export default SlideItem;
