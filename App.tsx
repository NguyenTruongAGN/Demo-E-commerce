/*eslint-disable */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {store} from '@src/redux/store';
import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {Home, HomeActive} from './public/images/svgIcons';
import Homepage from './src/containers/Homepage';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '@src/containers/Cart';
const Tab = createBottomTabNavigator();

const App = () => {
  const [routeName, setRouteName] = useState<any>();
  const navigationRef: any = createNavigationContainerRef();
  const HomeStack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaView style={{backgroundColor: '#F2F2F2', flex: 1, width: '100%'}}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            setRouteName(navigationRef.getCurrentRoute().name);
          }}
          onStateChange={async () => {
            const currentRouteName = navigationRef.getCurrentRoute().name;
            setRouteName(currentRouteName);
          }}>
          <Tab.Navigator
            initialRouteName="BottomHome"
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: routeName === 'Product Detail' ? {display: 'none'} : {display: 'flex'},
            }}>
            <Tab.Screen
              name="BottomHome"
              component={Homepage}
              options={{
                tabBarIcon: ({focused}) => (
                  <>
                    <View style={{alignItems: 'center'}}>
                      {focused ? <HomeActive /> : <Home />}
                      <Text style={{color: `${focused ? '#00A74C' : '#BDBDBD'}`}}>Trang chủ</Text>
                    </View>
                  </>
                ),
              }}
            />
          </Tab.Navigator>
          <HomeStack.Screen name="Cart" component={Cart} />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
