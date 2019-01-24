import * as React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import ContentView from 'components/ContentView/ContentView';

type Props = {};

const URI =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XnXChz496P_XvBFy4e7xp59-y7seeneFBFIYDFnVUQz8U9Fi';

class Onboarding extends React.Component<Props> {
  render() {
    return (
      <View style={{ height: '80%' }}>
        <ContentView />
      </View>
    );
  }
}

export default Onboarding;
