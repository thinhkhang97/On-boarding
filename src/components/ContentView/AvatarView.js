import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from 'sharedComponents/Avatar';

type Props = {
  source: string
};
const DEFAULT_SIZE = 254;
class AvatarView extends React.Component<Props> {
  render() {
    const { source } = this.props;
    return (
      <View
        style={{
          width: DEFAULT_SIZE,
          height: DEFAULT_SIZE,
          borderRadius: DEFAULT_SIZE / 2,
          borderColor: '#f5f8fc',
          borderWidth: 54,
          overflow: 'hidden',
          padding: 15,
          backgroundColor: 'white',
          marginBottom: 48
        }}
      >
        <Avatar source={source} style={{ flex: 1, width: '100%' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default AvatarView;
