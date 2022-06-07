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
  Alert
} from "react-native";
import store from "./store";
import reducer from "./reducer";
import { useSelector } from "react-redux";
import addTodoAction from './actions';

const ListItems = () => {
  const value = useSelector((state) => state) || [];

  const [list, setUpdateList] = React.useState(value);

  // React.useEffect(() => {
   
   
  // },[value]);
  
  

  // const processDelete = () => {
    
  //     setUpdateList(list.filter(item => item.text !== text));
  //     store.dispatch(addTodoAction(list.filter(item => item.text !== text)))
  //     console.log("OK Pressed")
  
  // }
  console.log(value);
  const deleteItem = (item) => {
    
     const keyTemp = item.key
     console.log("Item Key ",keyTemp)
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
        //  setUpdateList(list.filter(item => item.text != text));
          const listTemp = value.filter(item => item.key !== keyTemp)
          console.log("list temp",listTemp)
          store.dispatch(addTodoAction(listTemp))
      
        }}
      ]
    );
  }
  const updateItem =() =>{

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

      {/* {value.map(element => <Text style={styles.item}>{element}</Text>)} */}
      {/* <Text style={styles.item}>{value}</Text>         */}
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "60%",
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
});
export default ListItems;
