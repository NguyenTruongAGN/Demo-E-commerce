import React, {useState, useEffect} from 'react';
import {View, Image, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
const primaryColor = '#ee4d2d';
const Product = ({navigation, type, product, productDetail}: any) => {
  const [detail, setDetail] = useState<any>({
    img: '',
    name: '',
    price: 0,
  });

  useEffect(() => {
    productDetail && Object?.keys(productDetail)?.length && setDetail(productDetail);
  }, [productDetail]);

  const handleChangeTab = () => {
    type !== 'detail' &&
      navigation.navigate('BottomHome', {
        screen: 'ProductDetail',
        params: {product},
      });
    navigation?.setOptions({
      tabBarStyle: {display: 'none'},
    });
  };

  return (
    <TouchableOpacity
      onPress={() => handleChangeTab()}
      style={{
        width:
          type === 'detail'
            ? Dimensions.get('window').width - 12
            : Dimensions.get('window').width / 2 - 12,
        ...styles.productWrapper,
      }}>
      <View style={{position: 'relative'}}>
        <Image
          source={{uri: product?.img || detail?.img}}
          style={{
            width: '100%',
            height:
              type === 'detail'
                ? Dimensions.get('window').height / 2
                : Dimensions.get('window').height / 4 - 12,
          }}
        />
        <View style={styles.voucher}>
          <Image
            source={{uri: 'https://cf.shopee.vn/file/420b9e4b274b84e51e1bb6ceca62eb3c'}}
            style={{width: '100%', height: Dimensions.get('window').height / 4 - 12}}
          />
        </View>
      </View>
      <View>
        <Text numberOfLines={2}>{product?.name || detail?.name}</Text>
        <Text
          style={{
            fontSize: 12,
            borderWidth: 1,
            borderColor: primaryColor,
            padding: 2,
            alignSelf: 'flex-start',
            color: primaryColor,
          }}>
          ₫ 22.300 lúc 00:00
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View
            style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-end'}}>
            <Text style={{color: primaryColor, fontSize: 12}}>d</Text>
            <Text style={{color: primaryColor, fontSize: 16}}>
              {product?.price || detail?.price}
            </Text>
          </View>
          <Text style={{color: 'rgba(0,0,0,.54)'}}>Đã bán 0</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
const styles = StyleSheet.create({
  productWrapper: {
    overflow: 'hidden',
    marginHorizontal: 6,
    marginVertical: 6,
  },
  voucher: {
    position: 'absolute',
    zIndex: 10000,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
