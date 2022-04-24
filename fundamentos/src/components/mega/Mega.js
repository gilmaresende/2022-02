import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import estilo from "../estilo";
import Numero from "./Numero";

export default class Mega extends Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
    numeros: [],
  };

  alterarQtdNumero = async (qtd) => {
    await this.setState({ qtdNumeros: qtd });
  };

  gerarNumerosNaoContidos = (nums) => {
    const novo = parseInt(Math.random() * 60 + 1);
    return nums.includes(novo) ? this.gerarNumerosNaoContidos(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumerosNaoContidos(n)], [])
      .sort();
    this.setState({ numeros: numeros });
  };

  exibirNumeros = () => {
    const nums = this.state.numeros.map((m) => <Numero num={m} />);
    return nums;
  };

  render() {
    return (
      <>
        <Text style={estilo.txtG}>
          Gerador de Mega-Sena {this.state.qtdNumeros}
        </Text>
        <TextInput
          keyboardType={"numeric"}
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtd. de Números"
          value={this.state.qtdNumeros}
          onChangeText={this.alterarQtdNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros}></Button>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
