import React from 'react';
import type {Node} from 'react';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';
import AddItems from './redux/addItems';
import ListItems from './redux/listItems'

export default function App() {
  
   
  return (
    <Provider store={store}>
      <SafeAreaView style ={{flexDirection:'column'}}>
        <Text style={{justifyContent:'center', alignSelf:'center',fontSize:25}}>
          {'Todo List'}
        </Text>

        <AddItems/>

        {/* <Button title='Nut' onPress={()=>console.log(store.getState())}/> */}
        <ListItems/>
    </SafeAreaView>
  </Provider>

  )

}

