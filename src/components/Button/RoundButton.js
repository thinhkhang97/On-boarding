// @flow

import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from './Button';

type Props = {
  style?: View.propTypes.style,
  onPress: () => mixed,
  children: React.Node,
};

class RoundButton extends React.Component<Props> {
  static defaultProps = {
    style: {},
  };
  render() {
    const { onPress, style, children } = this.props;
    return (
      <Button
        style={[styles.container, style, styles.staticProps]}
        onPress={() => onPress && onPress()}
      >
        {children}
      </Button>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1154ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#731154',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 9,
    paddingLeft: 10,
    paddingRight: 10,
  },
  staticProps: {
    height: 44,
    borderRadius: 22,
    marginTop: 8,
    marginBottom: 8,
  },
});

export default RoundButton;
