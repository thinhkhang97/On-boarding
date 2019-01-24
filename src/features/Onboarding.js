import * as React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import SlideView from 'components/SlideView';
import SlideItem from 'components/SlideItem';
import Avatar from 'components/Avatar';
import Title from 'components/Title';
import Description from 'components/Description';
import RoundButton from 'components/Button/RoundButton';

type Props = {};

const URI =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XnXChz496P_XvBFy4e7xp59-y7seeneFBFIYDFnVUQz8U9Fi';

class Onboarding extends React.Component<Props> {
  data = ['view 1', 'view 2', 'view 3', 'view 4'];

  transformDataToComponent() {
    return this.data.map(item => (
      <SlideItem key={item}>
        <Avatar source={{ uri: URI }} />
      </SlideItem>
    ));
  }

  render() {
    return (
      <View style={{ height: 400 }}>
        {/* <SlideView>{this.transformDataToComponent()}</SlideView> */}
        {/* <Avatar source={{ uri: URI }} /> */}
        {/* <Title>Welcome, Beckham!!!</Title>
        <Description>
          Before using Grove, we would like to show you a quick recap of over 3
          years working for the company.
        </Description> */}
        <RoundButton style={{ width: 200 }}>
          <Text>Hello world</Text>
        </RoundButton>
      </View>
    );
  }
}

export default Onboarding;
