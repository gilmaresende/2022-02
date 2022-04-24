import React from "react";
import { Button } from "react-native";

export default (props) => {
  function executar() {
    console.log("Exc!!");
  }

  return <Button title="Executar" onPress={executar} />;
};
