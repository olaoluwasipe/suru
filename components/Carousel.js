import React, {Component, createRef} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import CarouselCardItem from './CarouselCardItem';
import data from '../data';

let CurrentSlide = 0;
let IntervalTime = 4000;

export default class Carousel extends Component {
  flatList = createRef();

  // TODO _goToNextPage()
  _goToNextPage = () => {
    if (CurrentSlide >= data.length-1) CurrentSlide = 0;

    this.flatList.current.scrollToIndex({
      index: ++CurrentSlide,
      animated: true,
    });
  };

  _startAutoPlay = () => {
    this._timerId = setInterval(this._goToNextPage, IntervalTime);
  };

  _stopAutoPlay = () => {
    if (this._timerId) {
      clearInterval(this._timerId);
      this._timerId = null;
    }
  };


  componentDidMount() {
    this._stopAutoPlay();
    this._startAutoPlay();
  }

  componentWillUnmount() {
    this._stopAutoPlay();
  }

  // TODO _renderItem()
  _renderItem({item, index}) {
    return <Image source={{uri: item}} style={styles.sliderItems} />;
  }

  // TODO _keyExtractor()
  _keyExtractor(item, index) {
    // console.log(item);
    return index.toString();
  }

  render() {
    return (
      <View style={{marginTop: 10, marginBottom: 10, justifyContent: "flex-start"}}>
        <FlatList
          style={{
            flex: 1,
            height: 250,
          }}
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={this._keyExtractor.bind(this)}
          renderItem={CarouselCardItem}
          horizontal={true}
          pagingEnabled
          flatListRef={React.createRef()}
          ref={this.flatList}
        />
      </View>
    );
  }
}