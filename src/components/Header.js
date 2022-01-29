import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Albums</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <AntDesign name="plus" size={25} style={{ color: "gray" }} />
        <Entypo name="grid" size={25} style={{ color: "gray" }} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
