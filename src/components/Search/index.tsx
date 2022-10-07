import {SearchIcon, ShoppingCartIcon, User} from 'public/images/svgIcons';
import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';

const Search = () => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
      <View style={styles.search}>
        <View>
          <SearchIcon width={20} height={20} />
        </View>
        <View style={{marginLeft: 8, paddingRight: 16}}>
          <TextInput placeholder="THỜI TRANG SALE TỪ 1K" placeholderTextColor="#ee4d2d" />
        </View>
      </View>
      <View>
        <TouchableOpacity>
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
    justifyContent: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    height: 36,
    lineHeight: 36,
  },
});
