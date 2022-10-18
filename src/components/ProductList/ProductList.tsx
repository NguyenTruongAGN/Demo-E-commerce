import {Product as ProductType, useGetProductsQuery} from '@src/services/products';
import React from 'react';
import {View} from 'react-native';
import Product from './Product';
const ProductList = ({navigation, type}: any) => {
  const {data} = useGetProductsQuery('');

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
        flexWrap: 'wrap',
      }}>
      {data?.data.map((p: ProductType, index) => (
        <Product key={index} navigation={navigation} type={type} product={p} />
      ))}
    </View>
  );
};

export default ProductList;
