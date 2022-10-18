import React from 'react';
import {Dimensions, Image, View} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const data = [
  {image: 'https://cf.shopee.vn/file/3be62e5bc303d4b1f93175d5a2151f28'},
  {image: 'https://cf.shopee.vn/file/29e80f36c2bd203262cd2fddc9f6f8c2'},
  {image: 'https://cf.shopee.vn/file/e025072ceb703edef0e422f2e2ea1087'},
];
const Slider = () => {
  const isCarousel: any = React.useRef(null);
  const [index, setIndex] = React.useState<any>(0);

  const handleSnap = (image: any) => {
    setIndex(image);
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={{width: '100%'}}>
        {item && <Image source={{uri: item.image}} style={{width: '100%', height: 200}} />}
      </View>
    );
  };
  return (
    <View
      style={{
        width: Dimensions.get('window').width,
        height: 200,
        position: 'relative',
      }}>
      <View>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          itemHeight={200}
          sliderHeight={200}
          activeAnimationType="spring"
          onSnapToItem={(image: any) => handleSnap(image)}
          autoplay
          loop
        />
      </View>
      <View style={{position: 'absolute', zIndex: 100000, right: 0, left: 0, bottom: -20}}>
        <Pagination
          carouselRef={isCarousel}
          dotsLength={data.length}
          activeDotIndex={index}
          dotStyle={{
            width: 12,
            height: 12,
            borderRadius: 12,
            marginHorizontal: 0,
            zIndex: 100000,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
          tappableDots={true}
        />
      </View>
    </View>
  );
};

export default Slider;
