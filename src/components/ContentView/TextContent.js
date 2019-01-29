// @flow
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Title from '../Title/Title';
import Description from '../Description/Description';
import MixTitle from '../Title/MixTitle';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type MixDataType = {
  leftTitle: string,
  leftSubTitle: string,
  rightTitle: string,
  rightSubTitle: string,
};

type Props = {
  mix?: boolean,
  title?: string,
  description?: string,
  mixData: MixDataType,
  mixTitleStyle?: Style,
  mixSubTitleStyle?: Style,
  titleStyle?: Style,
};

class TextContent extends React.Component<Props> {
  static defaultProps = {
    mix: false,
    mixData: {
      leftTitle: '',
      leftSubTitle: '',
      rightTitle: '',
      rightSubTitle: '',
    },
    title: '',
    description: '',
  };
  render() {
    const {
      mix,
      title,
      description,
      mixData,
      mixTitleStyle,
      mixSubTitleStyle,
      titleStyle,
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
          <Title style={[titleStyle, styles.titleText]}>{title}</Title>
        )}

        <Description style={styles.descriptionContainer}>{description}</Description>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-around' },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  descriptionContainer: {
    textAlign: 'center',
    paddingLeft: 39,
    paddingRight: 36,
  },
  titleText: { textAlign: 'center' },
});

export default TextContent;
