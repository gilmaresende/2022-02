import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default ({ num = 0 }) => {
  if (num % 2 === 0) return <Text style={estilo.txtG}>Par</Text>;
  else return <Text style={estilo.txtG}>Impar</Text>;
};
