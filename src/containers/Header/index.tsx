import Search from '@src/components/Search';
import Slider from '@src/components/Slider';
import React from 'react';
import {View} from 'react-native';
const Header = () => {
  return (
    <View>
      <Search />
      <Slider />
    </View>
  );
};

export default Header;
