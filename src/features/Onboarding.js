import * as React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import MixTitle from 'components/Title/MixTitle';

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
        <MixTitle number={3} title={'projects'} />
      </View>
    );
  }
}

export default Onboarding;
