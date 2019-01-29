// @flow

import * as React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import SpreadBar from '../SpreadBar/SpreadBar';
import Spread from '../SpreadBar/Spread';
import RoundButton from '../Button/RoundButton';
import SlideItem from './SlideItem';
import type { ____ViewStyleProp_Internal as Style } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

type Props = {
  onPressEndButton: () => mixed,
  children: Array<React.Element<typeof SlideItem>>, // Children should be SlideItem components,
  spreadStyle?: Style,
  buttonStyle?: Style,
  customButtonContent?: React.Node,
  customEndButtonContent?: React.Node,
  style: Style,
  activedColor?: string,
  unactivedColor?: string,
  onPressEndButton: () => mixed,
};

type State = {
  pageId: number,
  buttonText: string,
};

const screenWidth = Dimensions.get('window').width;

class SlideView extends React.Component<Props, State> {
  scroll: React.ElementRef<typeof ScrollView>;

  static defaultProps = {
    customButtonContent: <Text style={{ color: 'white' }}>Next</Text>,
    customEndButtonContent: <Text style={{ color: 'white' }}>Start using Grove</Text>,
    style: {},
  };

  state = {
    pageId: 0,
    buttonText: 'Next',
  };

  render() {
    const {
      onPressEndButton,
      children,
      style,
      buttonStyle,
      customButtonContent,
      customEndButtonContent,
    } = this.props;
    const { container, footerContainer } = styles;
    const { pageId, buttonText } = this.state;
    return (
      <View style={container}>
        <ScrollView
          ref={(scroll: React.ElementRef<typeof ScrollView>|null) => {
            if (scroll) this.scroll = scroll;
          }}
          horizontal={true}
          pagingEnabled={true}
          style={style}
          showsHorizontalScrollIndicator={false}
          onScroll={e => this.handleOnScroll(e)}
        >
          {children}
        </ScrollView>

        <View style={footerContainer}>
          <SpreadBar>{this.renderSpread()}</SpreadBar>
          <RoundButton
            onPress={() => {
              pageId < children.length - 1
                ? this.handleOnpressButton()
                : onPressEndButton && onPressEndButton();
            }}
            style={buttonStyle}
          >
            {pageId === children.length - 1 ? customEndButtonContent : customButtonContent}
          </RoundButton>
        </View>
      </View>
    );
  }

  renderSpread() {
    return (
      this.props.children &&
      this.props.children.map((item, i) => {
        return (
          <Spread
            key={i}
            id={i}
            actived={this.state.pageId == i}
            onPress={id => this.handleOnPressSpread(id)}
            style={this.props.spreadStyle}
            activedColor={this.props.activedColor}
            unactivedColor={this.props.unactivedColor}
          />
        );
      })
    );
  }

  scrollTo(id: number) {
    const offsetX = id * screenWidth;
    this.scroll.scrollTo({ x: offsetX, y: 0, animated: true });
  }

  handleOnPressSpread(id: number) {
    this.scrollTo(id);
  }

  handleOnScroll(e: any) {
    const pageId = parseInt(e.nativeEvent.contentOffset.x / screenWidth);
    this.setState({ pageId });
  }

  handleOnpressButton() {
    const pageId = this.state.pageId + 1;
    this.scrollTo(pageId % this.props.children.length); // Avoid case that users scroll more at the end
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  footerContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    marginTop: 40,
  },
  textInButton: { color: 'white' },
});

export default SlideView;
