import Header from '@src/containers/Header';
import {store} from '@src/redux/store';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <Header />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
