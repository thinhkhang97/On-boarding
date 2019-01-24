import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SpreadBar from 'sharedComponents/SpreadBar/SpreadBar';
import Spread from 'sharedComponents/SpreadBar/Spread';
import RoundButton from 'sharedComponents/Button/RoundButton';
type Props = {};

class FooterView extends React.Component<Props> {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <SpreadBar>
          <Spread actived />
          <Spread />
          <Spread />
          <Spread />
        </SpreadBar>
        <RoundButton style={{ marginTop: 8, marginBottom: 8 }}>
          <Text>Left arrow</Text>
        </RoundButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default FooterView;
