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
type Props = {};

const URI =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2XnXChz496P_XvBFy4e7xp59-y7seeneFBFIYDFnVUQz8U9Fi';

class Onboarding extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.contentContainer}>
          <ContentView />
        </View>
        <View style={styles.footerContainer}>
          <FooterView />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    height: '85%'
  },
  footerContainer: {
    flex: 1
  }
});

export default Onboarding;
