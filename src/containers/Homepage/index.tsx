import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from '@src/components/Categories';
import ProductList from '@src/components/ProductList/ProductList';
import React from 'react';
import {ImageBackground, View, ScrollView} from 'react-native';
import Cart from '../Cart';
import Header from '../Header';
import ProductDetail from '../ProductDetail';

const Homepage = () => {
  const HomeStack = createNativeStackNavigator();

  const Home = ({navigation}: any) => {
    return (
      <ScrollView>
        <View>
          <Header navigation={navigation} />
        </View>
        <ImageBackground
          source={{uri: 'https://cf.shopee.vn/file/df5a90f7495604b1425d4b432b6217e5_xxhdpi'}}>
          <Categories />
        </ImageBackground>
        <ProductList navigation={navigation} />
      </ScrollView>
    );
  };
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <HomeStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
      <HomeStack.Screen name="Cart" component={Cart} />
    </HomeStack.Navigator>
  );
};

export default Homepage;
