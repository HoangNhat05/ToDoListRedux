import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  FlatList,
  Animated,
  Alert,
  Modal
} from "react-native";
import store from "./store";
import reducer from "./reducer";
import { useSelector } from "react-redux";
import {addTodoAction, deleteAction,updateAction} from './actions';

const ListItems = () => {
  const value = useSelector((state) => state) || [];

  const [list, setUpdateList] = React.useState(value);
  const [text, setText] = React.useState("");
  const [idItem, setIdItem] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);

  console.log(value);
  const deleteItem = (item) => {
    
     const keyTemp = item.key
    Alert.alert(
      "Thông báo",
     "Bạn có chắc chắn xoá nội dung này không ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          console.log("OK Pressed")
          const listTemp = value.filter(item => item.key !== keyTemp)
          console.log("list temp",listTemp)
          store.dispatch(deleteAction(listTemp))
      
        }}
      ]
    );
  }
  const updateItem =(item) => {
    const keyTemp = item.key
    const itemTemp = value.filter(item => item.key == keyTemp)
    for(let i=0 ; i < value.length; i++){
     if( value[i].key == keyTemp) { 
      setIdItem(i)
     }
    }
    setText(itemTemp[0].text)
    setModalVisible(true)
  }

  const dispathUpdate= () =>{
    let listTemp = [...value]
    listTemp[idItem].text = text
    store.dispatch(updateAction(listTemp))
    setModalVisible(false)
  }
  const renderItem = ({ item }) => (
    <View style={styles.viewItem}>
      <Text style={styles.item}>{item.text}</Text>

      <TouchableOpacity style={styles.update} onPress={()=>updateItem(item)}>
        <Text style={styles.textStyle}>Sửa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.delete} onPress={()=>deleteItem(item)}>
        <Text style={styles.textStyle}>Xoá</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ marginTop: 100 }}>
      <Text
        style={{ fontSize: 20, justifyContent: "center", alignSelf: "center", marginBottom:30 }}
      >
        {"Danh sách việc cần làm"}
      </Text>
      <FlatList
        data={value}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
         <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput
                placeholder='Sửa việc cần làm'
                style={styles.input}
                onChangeText={setText}
                value={text}/>
              <TouchableOpacity style = {styles.button_add} onPress ={()=>dispathUpdate()}>
              <Text>{'Cập nhật'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
  },
  view_add: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  viewItem: {
    flexDirection: "row",
    flex: 10,
    margin: 5,
  },
  item: {
    //height:30,
    flex: 8,
    marginStart: 30,
    marginTop: 15,
    marginEnd: 15,
  },
  button_add: {
    height: 30,
    width: 60,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  update: {
    flex: 1,
    backgroundColor: "blue",
    marginRight: 3,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  delete: {
    flex: 1,
    backgroundColor: "red",
    marginLeft: 3,
    borderRadius: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle: {
    color: "white",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width:"70%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    //marginBottom: 15,
    textAlign: "center"
  },
  button_add:{
    height: 30,
    width:70,
    marginTop:15,
    borderColor:'red',
    borderWidth:2,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center' 
  }
});
export default ListItems;
