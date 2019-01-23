import * as React from 'react';
import { View, Text, Dimensions } from 'react-native';
import SlideView from 'components/SlideView';
import SlideItem from 'components/SlideItem';

type Props = {};
class Onboarding extends React.Component<Props> {
  data = ['view 1', 'view 2', 'view 3', 'view 4'];

  transformDataToComponent() {
    return this.data.map(item => (
      <SlideItem key={item}>
        <Text>{item}</Text>
      </SlideItem>
    ));
  }

  render() {
    return (
      <View style={{ height: 400 }}>
        <SlideView>{this.transformDataToComponent()}</SlideView>
      </View>
    );
  }
}

export default Onboarding;
