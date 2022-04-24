import React from "react";
import { StyleSheet, View } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={style.FlexV1}>
      <Quadrado cor="#950"></Quadrado>
      <Quadrado cor="#900"></Quadrado>
      <Quadrado cor="#059"></Quadrado>
      <Quadrado cor="#090"></Quadrado>
      <Quadrado cor="#009"></Quadrado>
    </View>
  );
};

const style = StyleSheet.create({
  FlexV1: {
    flexDirection: "row",
    width: "100%",
    height: 350,
    alignItems: "center",
    justifyContent: "space-evenly",

    backgroundColor: "#000",
  },
});
