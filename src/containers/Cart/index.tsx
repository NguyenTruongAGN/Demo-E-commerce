import {useLazyGetCartQuery, useUpdateQuantityMutation} from '@src/services/cart';
import {Delete} from 'public/images/svgIcons';
import React, {useState, useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
const CHANGE_TYPE = {
  PLUS: 1,
  MINUS: 0,
};
const Cart = () => {
  const [showActions, setShowActions] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [onFetching, {data, isFetching}] = useLazyGetCartQuery();
  useEffect(() => {
    onFetching({});
  }, [onFetching]);

  const [updateQuantity] = useUpdateQuantityMutation();

  const onChangeQuantity = (type: number, productId: string, qty: number) => {
    updateQuantity({type, productId: productId, qty})
      .unwrap()
      .then(() => {
        onFetching({});
      })
      .catch(() => {});
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const onDelete = () => {};

  const handleLongPress = () => {
    setShowActions(true);
  };

  return (
    <ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isFetching}
        statusBarTranslucent={true}>
        <View style={styles.centeredView}>
          <View style={{...styles.modalView, width: 300}}>
            <ActivityIndicator size="large" color={'red'} />
            <Text style={styles.modalText}>Loading...</Text>
          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={showDeleteModal}
        statusBarTranslucent={true}>
        <View style={{...styles.centeredView}}>
          <View style={styles.modalView}>
            <View style={{paddingBottom: 12}}>
              <Text
                style={{
                  paddingTop: 12,
                  paddingBottom: 12,
                  paddingLeft: 20,
                  paddingRight: 20,
                  fontSize: 16,
                  width: '100%',
                  textAlign: 'center',
                }}>
                Do you want to delete?
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <TouchableOpacity onPress={() => setShowDeleteModal(!showDeleteModal)}>
                  <Text>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onDelete()}>
                  <Text>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {data?.data?.map((item: any) => (
        <TouchableOpacity
          style={styles.container}
          onLongPress={() => handleLongPress()}
          onPress={() => setShowActions(false)}>
          <View style={styles.wrapper} key={item._id}>
            <View style={styles.image}>
              <Image source={{uri: item?.product_ID?.img}} style={{width: 120, height: 120}} />
            </View>
            <View style={styles.content}>
              <Text numberOfLines={3}>{item.product_ID.name}</Text>
              <View
                style={{
                  ...styles.wrapper,
                  justifyContent: 'flex-start',
                  marginTop: 6,
                  marginBottom: 6,
                }}>
                <TouchableOpacity
                  onPress={() => onChangeQuantity(CHANGE_TYPE.MINUS, item?.product_ID?._id, 1)}
                  style={styles.borderButton}>
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={{width: 40, textAlign: 'center'}}>{item.qty}</Text>
                <TouchableOpacity
                  onPress={() => onChangeQuantity(CHANGE_TYPE.PLUS, item?.product_ID?._id, 1)}
                  style={styles.borderButton}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <Text>
                {(item.product_ID?.price * item.qty).toLocaleString('vi', {
                  style: 'currency',
                  currency: 'VND',
                })}
              </Text>
            </View>
          </View>
          <View
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              top: 0,
              backgroundColor: '#fff',
              height: '120%',
              display: showActions ? 'flex' : 'none',
            }}>
            <TouchableOpacity
              onPress={() => handleDelete()}
              style={{
                backgroundColor: 'red',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                width: 40,
              }}>
              <Image
                source={require('public/images/delete.png')}
                style={{width: 20, height: 20, transform: [{translateY: -10}]}}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    padding: 10,
    marginTop: 10,
    position: 'relative',
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: '30%',
  },
  content: {
    width: '68%',
  },
  borderButton: {
    borderWidth: 1,
    borderColor: '#a2a3af',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 6,
    paddingBottom: 6,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0008',
  },
  modalView: {
    margin: 20,
    width: 250,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginVertical: 15,
    textAlign: 'center',
    fontSize: 17,
    marginLeft: 15,
  },
});
export default Cart;
