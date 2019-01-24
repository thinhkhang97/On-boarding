import * as React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  size?: number
};

class SpreadBar extends React.Component<Props> {
  static defaultProps = {
    sizeOfSpread: 8
  };
  render() {
    const { sizeOfSpread } = this.props;
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: sizeOfSpread * (2 * this.props.children.length - 1),
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default SpreadBar;
