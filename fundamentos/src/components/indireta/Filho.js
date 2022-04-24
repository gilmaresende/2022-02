import React from "react";
import { Button } from "react-native";

export default (props) => {
  function getNumero(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator + 1);
  }

  return (
    <Button
      title="Executar"
      onPress={function () {
        const n = getNumero(props.min, props.max);
        props.funcao(n);
      }}
    ></Button>
  );
};
