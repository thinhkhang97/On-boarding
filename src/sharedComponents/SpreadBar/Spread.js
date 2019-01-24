import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  actived?: boolean,
  size?: number,
  style?: object,
  activedColor: string,
  unactivedColor: string
};

const ACTIVE_COLOR = '#314057';
const UNACTIVE_COLOR = '#33314057';

class Spread extends React.Component<Props> {
  static defaultProps = {
    actived: false,
    activedColor: ACTIVE_COLOR,
    unactivedColor: UNACTIVE_COLOR,
    size: 8,
    style: {}
  };
  render() {
    const {
      actived,
      size,
      style,
      activedColor,
      unactivedColor,
      onPress
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          {
            backgroundColor: actived ? activedColor : unactivedColor,
            height: size,
            width: size,
            borderRadius: size / 2
          },
          this.props.style
        ]}
        onPress={() => onPress && onPress()}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});

export default Spread;
