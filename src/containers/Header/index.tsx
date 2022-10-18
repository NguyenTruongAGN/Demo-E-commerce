import Search from '@src/components/Search';
import Slider from '@src/components/Slider';
import React from 'react';
import {View} from 'react-native';
interface Props {
  navigation: any;
}
const Header = ({navigation}: Props) => {
  return (
    <>
      <View>
        <View style={{position: 'absolute', zIndex: 1000, top: 20}}>
          <Search navigation={navigation} />
        </View>
        <View>
          <Slider />
        </View>
      </View>
    </>
  );
};

export default Header;
