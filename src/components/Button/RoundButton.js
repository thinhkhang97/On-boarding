// Still get a trouble with shadow
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from './Button';

type Props = {
  width?: number,
  height?: number,
  style?: object
};

class RoundButton extends React.Component<Props> {
  static defaultProps = {
    width: 83,
    height: 44,
    style: {}
  };
  render() {
    return (
      <Button
        style={[
          {
            width: this.props.width,
            height: this.props.height,
            borderRadius: this.props.height / 2
          },
          styles.container,
          this.props.style
        ]}
        onPress={() => this.props.onPress()}
      >
        {this.props.children}
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
    shadowRadius: 9
  }
});

export default RoundButton;
