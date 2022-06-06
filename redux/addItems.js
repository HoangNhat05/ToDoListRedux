import React from 'react';
import { StyleSheet, Text, SafeAreaView ,TextInput,View,Button, TouchableOpacity} from 'react-native';
import store from './store'
import addTodoAction from './actions';
const AddItems = () => {
    const [text, setText] = React.useState("");
    const [todoList, setTodoList] = React.useState([]);
    const addTodo =() => {
      if(text!=""){
        setTodoList([...todoList,{ text: text, key: Date.now()}])
        store.dispatch(addTodoAction([...todoList,{text: text, key: Date.now()}]))
        setText('')
      }
     

    }
    return(
      <View style={{flexDirection:'column',flex:1}}>
        <View style={styles.view_add}>
            <TextInput
                placeholder='Nhập việc cần làm'
                style={styles.input}
                onChangeText={setText}
                value={text}/>
            <TouchableOpacity style = {styles.button_add} onPress ={addTodo}>
              <Text>{'Thêm'}</Text>
            </TouchableOpacity>
        </View>
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

    button_add:{
      height: 30,
      width:60,
      borderColor:'blue',
      borderWidth:2,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center' 
    }
  });
export default AddItems;