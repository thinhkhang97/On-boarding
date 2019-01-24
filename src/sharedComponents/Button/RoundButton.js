// Still get a trouble with shadow
import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Button from './Button';

type Props = {
  style?: object
};

class RoundButton extends React.Component<Props> {
  static defaultProps = {
    style: {}
  };
  render() {
    const { onPress } = this.props;
    return (
      <Button
        style={[
          styles.container,
          this.props.style,
          {
            height: 44,
            borderRadius: 22
          }
        ]}
        onPress={() => onPress && onPress()}
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
    shadowRadius: 9,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default RoundButton;
