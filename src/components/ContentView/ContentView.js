// @flow
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageContent from './ImageContent';
import Avatar from 'sharedComponents/Avatar';
import TextContent from './TextContent';

type Props = {
  imageContent?: React.Node,
  textContent?: React.Node,
};

class ContentView extends React.Component<Props> {
  static defaultProps = {
    imageContent: <View />,
    textContent: <View />,
  };
  render() {
    const { imageContent, textContent } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>{imageContent}</View>
        <View style={styles.textContainer}>{textContent}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    height: '75%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  textContainer: {
    flex: 1,
  },
});

export default ContentView;
