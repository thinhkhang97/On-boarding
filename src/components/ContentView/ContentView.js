import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageContent from './ImageContent';
import Avatar from 'sharedComponents/Avatar';
import TextContent from './TextContent';

type Props = {
  imageContainer: object
};
const URI =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XnXChz496P_XvBFy4e7xp59-y7seeneFBFIYDFnVUQz8U9Fi';
class ContentView extends React.Component<Props> {
  render() {
    const { imageContent, textContent } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          <ImageContent source={{ uri: URI }} />
        </View>
        <View style={styles.textContainer}>
          <TextContent
            mix
            mixData={{
              leftTitle: 3,
              leftSubTitle: 'Projects',
              rightTitle: 90,
              rightSubTitle: 'Connections'
            }}
            description="Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem."
          />
        </View>
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
    paddingBottom: 50
  },
  textContainer: {
    flex: 1
  }
});

export default ContentView;
