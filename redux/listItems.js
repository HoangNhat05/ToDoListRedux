import React from 'react';
import { StyleSheet,
     Text, 
     SafeAreaView ,
     TextInput,
     View,
     Button, 
     TouchableOpacity,
     FlatList,
     Animated,
     StatusBar
    } from 'react-native';
import store from './store';
import reducer from './reducer'
import {useSelector} from 'react-redux'

const ListItems = () => {


    const value = useSelector(state => state) || []
  
    console.log(value)
    const renderItem = ({ item }) => (
      <Text style={styles.item}>{item.text}</Text>  
    )
    
    
    return(
      <View style={{marginTop: 100}}>
        <Text style={{fontSize:20, justifyContent:'center',alignSelf:'center',}}>{"Danh sách việc cần làm"}</Text> 
        <FlatList
        data={value}
        renderItem={renderItem}
        keyExtractor={item => item.key}
      />
     
        {/* {value.map(element => <Text style={styles.item}>{element}</Text>)} */}
        {/* <Text style={styles.item}>{value}</Text>         */}
      </View>
    )
    

}
const styles = StyleSheet.create({
    input: {
      height: 40,
      width:'60%',
      margin: 12,
      padding: 10,
      borderBottomWidth:1
    },
    view_add:{
    marginTop: 40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
    },
    item:{
        //height:30,
        marginStart:30,
        marginTop:15, 
        marginEnd:15
    },
    button_add:{
      height: 30,
      width:60,
      borderColor:'blue',
      borderWidth:2,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center' 
    },
   
  });
export default ListItems;