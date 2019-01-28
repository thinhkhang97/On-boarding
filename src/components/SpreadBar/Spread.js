// @flow

import * as React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  actived?: boolean,
  size?: number,
  style?: View.propTypes.style,
  activedColor: string,
  unactivedColor: string,
  id: string,
  onPress: (id: any) => mixed,
  children: React.Node,
};

const ACTIVE_COLOR = '#314057';
const UNACTIVE_COLOR = '#33314057';

class Spread extends React.Component<Props> {
  static defaultProps = {
    actived: false,
    activedColor: ACTIVE_COLOR,
    unactivedColor: UNACTIVE_COLOR,
    size: 8,
    style: {},
  };
  render() {
    const {
      actived,
      size,
      style,
      activedColor,
      unactivedColor,
      onPress,
      id,
      children,
    } = this.props;
    return (
      <TouchableOpacity
        style={[
          {
            backgroundColor: actived ? activedColor : unactivedColor,
            height: size,
            width: size,
            borderRadius: size / 2,
            marginTop: 8,
            marginBottom: 8,
          },
          style,
        ]}
        onPress={() => onPress && onPress(id)}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({});

export default Spread;
