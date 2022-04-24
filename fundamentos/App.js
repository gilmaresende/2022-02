import { StyleSheet, View } from "react-native";
import FlaxBoxV4 from "./src/components/layout/FlaxBoxV4";
import Mega from "./src/components/mega/Mega";

export default function App() {
  return (
    <View style={style.App}>
      <Mega qtdNumeros={7}></Mega>
    </View>
  );
}

const style = StyleSheet.create({
  App: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
