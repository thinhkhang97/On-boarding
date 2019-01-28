// @flow
import * as React from 'react';
import { View, Text, Dimensions, Image, SafeAreaView, StyleSheet, Alert } from 'react-native';
import ContentView from '../components/ContentView/ContentView';
import SlideView from '../components/SlideView/SlideView';
import SlideItem from '../components/SlideView/SlideItem';
import ImageContent from '../components/ContentView/ImageContent';
import TextContent from '../components/ContentView/TextContent';
import { WORDS, IMAGES } from './Definations';

type Props = {
  userData: Object,
  theme: Object,
};

class Onboarding extends React.Component<Props> {
  renderSlideView() {
    const { userData, theme } = this.props;
    return (
      <SlideView
        onPressEndButton={() => {
          Alert.alert('This is end of slide view');
        }}
        buttonStyle={{ backgroundColor: theme.mainColor }}
        activedColor={theme.mainColor}
      >
        <SlideItem>
          <ContentView
            imageContent={
              <ImageContent
                avatar
                source={{ uri: userData.avatarURL }}
                avatarBorderColor={theme.mainColor}
              />
            }
            textContent={
              <TextContent
                titleStyle={{ color: theme.mainColor }}
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
                titleStyle={{ color: theme.mainColor }}
                description={`${userData.workTimeDescription}`}
                title={`${userData.workTime} ${userData.workTime > 1 ? WORDS.HOURS : WORDS.HOUR}`}
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
                  leftSubTitle: userData.numberProjects > 1 ? WORDS.PROJECTS : WORDS.PROJECT,
                  rightTitle: userData.numberConnections,
                  rightSubTitle:
                    userData.numberConnections > 1 ? WORDS.CONNECTIONS : WORDS.CONNECTION,
                }}
                mixTitleStyle={{ color: theme.mainColor }}
                mixSubTitleStyle={{ color: theme.mainColor }}
                description={`${userData.socialDescription}`}
                title={`${userData.workTime} ${userData.workTime > 1 ? WORDS.HOURS : WORDS.HOUR}`}
              />
            }
          />
        </SlideItem>
        <SlideItem>
          <ContentView
            imageContent={<ImageContent source={IMAGES.VIEW4} />}
            textContent={
              <TextContent
                titleStyle={{ color: theme.mainColor }}
                description={`${userData.promotionDescription}`}
                title={`${userData.numberPromotions > 1 ? WORDS.MULTIPLE : WORDS.ONE} ${
                  userData.numberConnections > 1 ? WORDS.PROMOTIONS : WORDS.PROMOTION
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
    flex: 1,
  },
});

export default Onboarding;
