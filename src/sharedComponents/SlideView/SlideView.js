import * as React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import SpreadBar from '../SpreadBar/SpreadBar';
import Spread from '../SpreadBar/Spread';
import RoundButton from '../Button/RoundButton';

type Props = {
  onPressEndButton: () => mixed,
  children: Array // Children should be SlideItem components
};

type State = {
  pageId: number,
  buttonText: string
};

const screenWidth = Dimensions.get('window').width;

class SlideView extends React.Component<Props, State> {
  state = {
    pageId: 0,
    buttonText: 'Next'
  };

  render() {
    const { onPressEndButton, children, style } = this.props;
    const { container, footerContainer, textInButton } = styles;
    const { pageId, buttonText } = this.state;
    return (
      <View style={container}>
        <ScrollView
          ref={scroll => {
            this.scroll = scroll;
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
          >
            <Text style={textInButton}>
              {pageId === children.length - 1 ? 'Start using Grove' : 'Next'}
            </Text>
          </RoundButton>
        </View>
      </View>
    );
  }

  renderSpread() {
    return this.props.children.map((item, i) => {
      return (
        <Spread
          key={i}
          id={i}
          actived={this.state.pageId == i}
          onPress={id => this.handleOnPressSpread(id)}
        />
      );
    });
  }

  scrollTo(id) {
    const offsetX = id * screenWidth;
    this.scroll.scrollTo({ x: offsetX, y: 0, animated: true });
  }

  handleOnPressSpread(id) {
    this.scrollTo(id);
  }

  handleOnScroll(e) {
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
    marginTop: 40
  },
  textInButton: { color: 'white' }
});

export default SlideView;
