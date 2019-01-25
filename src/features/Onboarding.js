import * as React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import ContentView from 'components/ContentView/ContentView';
import FooterView from 'components/FooterView';
import SlideView from 'sharedComponents/SlideView/SlideView';
import SlideItem from 'sharedComponents/SlideView/SlideItem';
import ImageContent from '../components/ContentView/ImageContent';
type Props = {};

const URI =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XnXChz496P_XvBFy4e7xp59-y7seeneFBFIYDFnVUQz8U9Fi';
const DATA_SAMPLE = {
  username: 'Beckham',
  userDescription:
    'Before using Grove, we would like to show you a quick recap of over 3 years working for the company.',
  workTime: 8320,
  workTimeDescription:
    'Approx. working hours at VISA Global. Thats ten times Elon Musk believes that his ship will be able to fly to Mars',
  numberProjects: 3,
  numberConnections: 90,
  socialDescription:
    'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin, erat a elementum rutrum, neque sem.',
  numberPromotions: 2,
  promotionDescription:
    'You’ve  been promoted 3 times. Keep climbing, aim for the summit'
};

class Onboarding extends React.Component<Props> {
  renderSlideView() {
    return (
      <SlideView>
        <SlideItem>
          <ContentView
            avatar
            title={`Welcome,${DATA_SAMPLE.username}`}
            description={DATA_SAMPLE.userDescription}
            imageSource={{ uri: URI }}
          />
        </SlideItem>
        <SlideItem>
          <ContentView
            title={`${DATA_SAMPLE.workTime} Hrs`}
            description={DATA_SAMPLE.workTimeDescription}
            imageSource={require('asset/images/view2.png')}
          />
        </SlideItem>
        <SlideItem>
          <ContentView
            mixTitle
            mixTitleData={{
              leftTitle: DATA_SAMPLE.numberProjects,
              leftSubTitle: 'Projects',
              rightTitle: DATA_SAMPLE.numberConnections,
              rightSubTitle: 'Connections'
            }}
            description={DATA_SAMPLE.socialDescription}
            imageSource={require('asset/images/view3.png')}
          />
        </SlideItem>
        <SlideItem>
          <ContentView
            title={`${DATA_SAMPLE.numberPromotions} promotions`}
            description={DATA_SAMPLE.promotionDescription}
            imageSource={require('asset/images/view4.png')}
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
    height: '100%'
  }
});

export default Onboarding;
