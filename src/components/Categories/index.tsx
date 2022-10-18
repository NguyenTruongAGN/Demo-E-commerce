import React from 'react';
import {View, ScrollView} from 'react-native';
import CategoryItem from './CategoryItem';
const Categories = () => {
  return (
    <View style={{width: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[...Array(5)].map((item: any, index: number) => (
          <CategoryItem key={index} title={item?.title} image={item?.image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
