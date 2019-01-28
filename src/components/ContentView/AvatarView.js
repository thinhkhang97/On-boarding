// @flow
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from 'sharedComponents/Avatar';

type Props = {
  source: string,
  borderColor?: string,
};
const DEFAULT_SIZE = 254;
class AvatarView extends React.Component<Props> {
  static defaultProps = {
    borderColor: '#f5f8fc',
  };
  render() {
    const { source, borderColor } = this.props;
    return (
      <View
        style={{
          width: DEFAULT_SIZE,
          height: DEFAULT_SIZE,
          borderRadius: DEFAULT_SIZE / 2,
          borderColor: borderColor,
          borderWidth: 54,
          overflow: 'hidden',
          padding: 15,
          backgroundColor: 'white',
          marginBottom: 48,
        }}
      >
        <Avatar source={source} style={{ flex: 1, width: '100%' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AvatarView;
