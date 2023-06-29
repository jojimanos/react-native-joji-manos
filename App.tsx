import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import Form from "./components/form";
import InputElement from "./components/inputText/inputElement";
import Checkbox from "./components/checkbox/checkbox";

export default function App() {
  const [title, onChangeTitle] = useState("Useless Text");
  const [content, onChangeContent] =
    useState<React.SetStateAction<string>>("Useless Text");

  return (
    <View style={styles.container}>
      <Checkbox
        size={"sm"} //sm, md or lg, lg is the default
        style={"string"} //there are solid, outline and ghost variations
        color={"string"}
        background={"string"}
        text={"string"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    flexDirection: "row",
  },
});
