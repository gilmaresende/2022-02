import React from "react";
import { Text, View } from "react-native";
import estilo from "../estilo";

export default ({ num }) => {
  return (
    <View
      style={[
        estilo.txtG,
        {
          backgroundColor: "#000",
          height: 50,
          width: 50,
          margin: 5,
          borderRadius: 25,
        },
      ]}
    >
      <Text style={{ color: "#fff", fontSize: 35 }}>{num}</Text>
    </View>
  );
};
