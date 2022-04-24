import React from "react";
import { Text } from "react-native";

function Aleatorio(props) {
  const delta = props.max - props.min + 1;
  const number = parseInt(Math.random() * delta) - props.min;
  return <Text>{number}</Text>;
}
export default Aleatorio;
