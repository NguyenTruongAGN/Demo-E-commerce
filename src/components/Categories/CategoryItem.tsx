import React from 'react';
import {Image, View, Text} from 'react-native';

interface Props {
  image: string;
  title: string;
}
const CategoryItem = ({
  image = 'https://cf.shopee.vn/file/e4a404283b3824c211c1549aedd28d5f_xxhdpi',
  title = 'Khung gio san sale',
}: Props) => {
  return (
    <View
      style={{
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 10,
      }}>
      <Image source={{uri: image}} style={{width: 40, height: 40}} />
      <Text style={{textAlign: 'center'}}>{title}</Text>
    </View>
  );
};

export default CategoryItem;
