// @flow

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Spread from './Spread';

type Props = {
  sizeOfSpread: number,
  children?: Array<React.Element<typeof Spread>>,
};

class SpreadBar extends React.Component<Props> {
  static defaultProps = {
    sizeOfSpread: 8,
  };
  render() {
    const { sizeOfSpread, children } = this.props;
    let width = 200;
    if (children) width = sizeOfSpread * (2 * children.length - 1);
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SpreadBar;
