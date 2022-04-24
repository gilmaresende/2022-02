import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default (props) => (
  <Text style={estilo.txtG}>
    O Valor {props.max} é maior que o valor {props.min}!
  </Text>
);
