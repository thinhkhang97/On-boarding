import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from 'sharedComponents/Title/Title';
import Description from 'sharedComponents/Description';
import MixTitle from 'sharedComponents/Title/MixTitle';

type Props = {
  mix?: boolean,
  title: string,
  description: string,
  mixData?: mixed
};

class TextContent extends React.Component<Props> {
  static defaultProps = {
    mix: false,
    mixData: {
      leftTitle: '',
      leftSubTitle: '',
      rightTitle: '',
      rightSubTitle: ''
    }
  };
  render() {
    const { mix, title, description, mixData } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'space-around' }}>
        {mix ? (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            <MixTitle
              title={mixData.leftTitle}
              subTitle={mixData.leftSubTitle}
            />
            <MixTitle
              title={mixData.rightTitle}
              subTitle={mixData.rightSubTitle}
            />
          </View>
        ) : (
          <Title style={{ textAlign: 'center' }}>{title}</Title>
        )}

        <Description
          style={{
            textAlign: 'center',
            paddingLeft: 39,
            paddingRight: 36
          }}
        >
          {description}
        </Description>
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default TextContent;
