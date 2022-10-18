import {SearchIcon, ShoppingCartIcon, User} from 'public/images/svgIcons';
import React from 'react';
import {Dimensions, StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

interface Props {
  navigation: any;
}

const Search = ({navigation}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
      }}>
      <View style={styles.search}>
        <View>
          <SearchIcon width={20} height={20} />
        </View>
        <View style={{marginLeft: 8, paddingRight: 16}}>
          <TextInput placeholder="THỜI TRANG SALE TỪ 1K" placeholderTextColor="#ee4d2d" />
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <ShoppingCartIcon width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <User width={20} height={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingRight: 16,
    paddingLeft: 16,
    height: 36,
    lineHeight: 36,
    backgroundColor: '#fff',
    width: '65%',
  },
});
