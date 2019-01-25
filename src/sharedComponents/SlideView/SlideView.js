import * as React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet } from 'react-native';
import SpreadBar from '../SpreadBar/SpreadBar';
import Spread from '../SpreadBar/Spread';
import RoundButton from '../Button/RoundButton';

type Props = {
  onPressEndedButton: () => mixed
};
type State = {};

const screenWidth = Dimensions.get('window').width;

class SlideView extends React.Component<Props, State> {
  state = {
    pageId: 0,
    buttonText: 'Next'
  };

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
    this.scrollTo(pageId % 4);
  }

  render() {
    const { onPressEndedButton } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          ref={scroll => {
            this.scroll = scroll;
          }}
          horizontal={true}
          pagingEnabled={true}
          style={this.props.style}
          showsHorizontalScrollIndicator={false}
          onScroll={e => this.handleOnScroll(e)}
        >
          {this.props.children}
        </ScrollView>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            height: 100,
            justifyContent: 'center',
            marginTop: 40
          }}
        >
          <SpreadBar>{this.renderSpread()}</SpreadBar>
          <RoundButton
            onPress={() => {
              this.state.pageId < 3
                ? this.handleOnpressButton()
                : onPressEndedButton && onPressEndedButton();
            }}
          >
            <Text style={{ color: 'white' }}>
              {this.state.pageId === 3 ? 'Start using Grove' : 'Next'}
            </Text>
          </RoundButton>
        </View>
      </View>
    );
  }
}

export default SlideView;
