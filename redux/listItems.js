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
  StatusBar,
} from "react-native";
import store from "./store";
import reducer from "./reducer";
import { useSelector } from "react-redux";

const ListItems = () => {
  const value = useSelector((state) => state) || [];

  console.log(value);
  const renderItem = ({ item }) => (
    <View style={styles.viewItem}>
      <Text style={styles.item}>{item.text}</Text>

      <TouchableOpacity style={styles.update}>
        <Text style={styles.textStyle}>Sửa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.delete}>
        <Text style={styles.textStyle}>Xoá</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ marginTop: 100 }}>
      <Text
        style={{ fontSize: 20, justifyContent: "center", alignSelf: "center" }}
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
