import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from 'sharedComponents/Title/Title';
import Description from 'sharedComponents/Description';
import MixTitle from 'sharedComponents/Title/MixTitle';

type Props = {
  mix?: boolean,
  title?: string,
  description?: string,
  mixData?: mixed,
  mixTitleStyle?: object,
  mixSubTitleStyle?: object,
  titleStyle?: object
};

class TextContent extends React.Component<Props> {
  static defaultProps = {
    mix: false,
    mixData: {
      leftTitle: '',
      leftSubTitle: '',
      rightTitle: '',
      rightSubTitle: ''
    },
    title: '',
    description: ''
  };
  render() {
    const {
      mix,
      title,
      description,
      mixData,
      mixTitleStyle,
      mixSubTitleStyle,
      titleStyle
    } = this.props;
    return (
      <View style={styles.container}>
        {mix ? (
          <View style={styles.titleContainer}>
            <MixTitle
              title={mixData.leftTitle}
              subTitle={mixData.leftSubTitle}
              titleStyle={mixTitleStyle}
              subTitleStyle={mixSubTitleStyle}
            />
            <MixTitle
              title={mixData.rightTitle}
              subTitle={mixData.rightSubTitle}
              titleStyle={mixTitleStyle}
              subTitleStyle={mixSubTitleStyle}
            />
          </View>
        ) : (
          <Title style={[titleStyle, { textAlign: 'center' }]}>{title}</Title>
        )}

        <Description style={styles.descriptionContainer}>
          {description}
        </Description>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around' },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  descriptionContainer: {
    textAlign: 'center',
    paddingLeft: 39,
    paddingRight: 36
  }
});

export default TextContent;
