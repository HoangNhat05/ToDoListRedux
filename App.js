import React from 'react';
import type {Node} from 'react';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import AddItems from './redux/addItems';
import ListItems from './redux/listItems';
import Reactotron from 'reactotron-react-native';
if(__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'))
}
 
export default function App() {
  Reactotron.log('hello rendering world')
 
  return (
    <Provider store={store}>
      <SafeAreaView style ={{flexDirection:'column'}}>
        <Text style={{justifyContent:'center', alignSelf:'center',fontSize:25}}>
          {'Todo List'}
        </Text>
        <AddItems/>
        <ListItems/>
    </SafeAreaView>
  </Provider>

  )

}

