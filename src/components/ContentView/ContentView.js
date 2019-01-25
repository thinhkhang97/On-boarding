import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageContent from './ImageContent';
import Avatar from 'sharedComponents/Avatar';
import TextContent from './TextContent';

type Props = {
  avatar?: boolean,
  imageSource?: object,
  mixTitle?: boolean,
  mixTitleData?: object,
  description?: string,
  title?: string
};
const URI =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XnXChz496P_XvBFy4e7xp59-y7seeneFBFIYDFnVUQz8U9Fi';
class ContentView extends React.Component<Props> {
  static defaultProps = {
    avatar: false,
    mixTitle: false,
    description: false,
    mixTitleData: {
      leftTitle: 3,
      leftSubTitle: 'Projects',
      rightTitle: 90,
      rightSubTitle: 'Connections'
    },
    title: '',
    imageSource: { uri: '' }
  };
  render() {
    const {
      avatar,
      mixTitle,
      description,
      imageSource,
      mixTitleData,
      title
    } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.imageContainer}>
          <ImageContent avatar={avatar} source={imageSource} />
        </View>
        <View style={styles.textContainer}>
          <TextContent
            mix={mixTitle}
            mixData={mixTitleData}
            description={description}
            title={title}
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
    justifyContent: 'flex-end'
  },
  textContainer: {
    flex: 1
  }
});

export default ContentView;
