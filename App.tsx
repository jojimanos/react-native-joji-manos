import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import Form from "./components/form";
import InputElement from "./components/inputText/inputElement";

export default function App() {
  const [title, onChangeTitle] = useState("Useless Text");
  const [content, onChangeContent] =
    useState<React.SetStateAction<string>>("Useless Text");

  const [notes, setNotes] = useState([]);

  const onSubmit = async () => {
    const res = await fetch("http://localhost:8000/api/notes", {
      body: JSON.stringify({
        title: title,
        content: content,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  // const fetchNote = async () => {
  // fetch("http://localhost:8000/api/notes", {
  // method: "GET",
  // mode: "cors",
  // })
  // .then((response) => {
  // return response.json();
  // })
  // .then((data) => {
  // console.log("The data", data.notes[0]), setNotes(data.notes);
  // });
  // };

  useEffect(() => {
    // fetchNote("http://localhost:8000/api/notes", "notes", setNotes);
    // console.log(title, content);
  }, []);

  return (
    <View style={styles.container}>
      <Form onSubmit={onSubmit} bgColor={"azure"} screenSize={"sm"}>
        <InputElement
          placeholderTextColor="black"
          value="title"
          onChangeValue={onChangeTitle}
          outline={true}
          fontSize="lg"
        />
        <InputElement
          placeholderTextColor="red"
          value="content"
          onChangeValue={onChangeContent}
          outline={false}
          fontSize="md"
        />
      </Form>
      <StatusBar style="auto" />
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
  },
});
