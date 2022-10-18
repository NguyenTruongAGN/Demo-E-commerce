import Product from '@src/components/ProductList/Product';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useAddToCartMutation} from '@src/services/cart';
const Stack = createNativeStackNavigator();
const ProductDetail = ({navigation, route}: any) => {
  const Detail = () => {
    const [onAddToCart] = useAddToCartMutation();
    const handleAddToCart = (id: string) => {
      onAddToCart({productId: id, qty: 1})
        .unwrap()
        .then(() => {
          navigation.navigate('BottomHome', {screen: 'Cart'});
        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    return (
      <View>
        <Product type="detail" productDetail={route?.params?.product} />
        <View>
          <TouchableOpacity onPress={() => handleAddToCart(route?.params?.product?._id)}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Mua hang</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Product Detail"
        component={Detail}
        options={{title: route?.params?.product?.name}}
      />
    </Stack.Navigator>
  );
};

export default ProductDetail;
