import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SpreadBar from 'sharedComponents/SpreadBar/SpreadBar';
import Spread from 'sharedComponents/SpreadBar/Spread';
import RoundButton from 'sharedComponents/Button/RoundButton';

type Props = {
  listSpread: Array
};

class FooterView extends React.Component<Props> {
  render() {
    const { listSpread } = this.props;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <SpreadBar>{listSpread}</SpreadBar>
        <RoundButton style={{ marginTop: 8, marginBottom: 8 }}>
          <Text>Left arrow</Text>
        </RoundButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default FooterView;
