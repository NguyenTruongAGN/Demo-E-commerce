import React from 'react';
import {Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const data = [
  {
    title: 'a',
  },
];

const Slider = () => {
  const isCarousel = React.useRef(null);

  const renderItem = ({item}: any) => {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={200}
        itemWidth={200}
      />
    </View>
  );
};

export default Slider;
