import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Alert
} from 'react-native';
import ContentView from 'components/ContentView/ContentView';
import FooterView from 'components/FooterView';
import SlideView from 'sharedComponents/SlideView/SlideView';
import SlideItem from 'sharedComponents/SlideView/SlideItem';
import ImageContent from '../components/ContentView/ImageContent';
import TextContent from 'components/ContentView/TextContent';
import { WORDS, IMAGES } from './Definations';

type Props = {
  userData: object
};

class Onboarding extends React.Component<Props> {
  renderSlideView() {
    const { userData } = this.props;
    return (
      <SlideView
        onPressEndButton={() => {
          Alert.alert('This is end of slide view');
        }}
      >
        <SlideItem>
          <ContentView
            imageContent={
              <ImageContent avatar source={{ uri: userData.avatarURL }} />
            }
            textContent={
              <TextContent
                description={`${userData.userDescription}`}
                title={`${WORDS.WELCOME}, ${userData.userName}`}
              />
            }
          />
        </SlideItem>
        <SlideItem>
          <ContentView
            imageContent={<ImageContent source={IMAGES.VIEW2} />}
            textContent={
              <TextContent
                description={`${userData.workTimeDescription}`}
                title={`${userData.workTime} ${
                  userData.workTime > 1 ? WORDS.HOURS : WORDS.HOUR
                }`}
              />
            }
          />
        </SlideItem>
        <SlideItem>
          <ContentView
            imageContent={<ImageContent source={IMAGES.VIEW3} />}
            textContent={
              <TextContent
                mix
                mixData={{
                  leftTitle: userData.numberProjects,
                  leftSubTitle:
                    userData.numberProjects > 1
                      ? WORDS.PROJECTS
                      : WORDS.PROJECT,
                  rightTitle: userData.numberConnections,
                  rightSubTitle:
                    userData.numberConnections > 1
                      ? WORDS.CONNECTIONS
                      : WORDS.CONNECTION
                }}
                description={`${userData.socialDescription}`}
                title={`${userData.workTime} ${
                  userData.workTime > 1 ? WORDS.HOURS : WORDS.HOUR
                }`}
              />
            }
          />
        </SlideItem>
        <SlideItem>
          <ContentView
            imageContent={<ImageContent source={IMAGES.VIEW4} />}
            textContent={
              <TextContent
                description={`${userData.promotionDescription}`}
                title={`${
                  userData.numberPromotions > 1 ? WORDS.MULTIPLE : WORDS.ONE
                } ${
                  userData.numberConnections > 1
                    ? WORDS.PROMOTIONS
                    : WORDS.PROMOTION
                }`}
              />
            }
          />
        </SlideItem>
      </SlideView>
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.contentContainer}>{this.renderSlideView()}</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1
  }
});

export default Onboarding;
