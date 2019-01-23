import * as React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';

type Props = {};

class SlideView extends React.Component<Props> {
  render() {
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        style={this.props.style}
        showsHorizontalScrollIndicator={false}
      >
        {this.props.children}
      </ScrollView>
    );
  }
}

export default SlideView;
