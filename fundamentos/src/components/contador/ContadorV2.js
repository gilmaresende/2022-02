import React, { useState } from "react";
import { Button, Text } from "react-native";
import estilo from "../estilo";
import ContaBotoes from "./ContaBotoes";
import ContadorDisplay from "./ContadorDisplay";

export default (props) => {
  const [num, setNum] = useState(0);

  const inc = () => {
    setNum(num + 1);
  };
  const dec = () => {
    setNum(num - 1);
  };

  return (
    <>
      <Text style={estilo.txtG}>ContadorV2</Text>
      <ContadorDisplay num={num} />
      <ContaBotoes inc={inc} dec={dec} />
    </>
  );
};
