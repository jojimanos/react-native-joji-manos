import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./button";

type FormProps = {
  children;
  onSubmit: () => Promise<void>;
  bgColor: string;
  screenSize: string;
};

const Form: React.FC<FormProps> = ({
  onSubmit,
  children,
  bgColor,
  screenSize,
}) => {
  // need to access the original screen orientation and size to
  // determine the width and height of the form
  const backgroundColor = bgColor;
  const formWidth = 5 > 3 ? "20%" : "30%";
  const formHeight = screenSize === "sm" ? "20%" : "30%";

  const styles = StyleSheet.create({
    form: {
      width: `${formWidth}`,
      height: "40%",
      borderColor: "black",
      borderWidth: 3,
      borderStyle: "solid",
      paddingVertical: 30,
      paddingHorizontal: 20,
      flexDirection: "column",
      backgroundColor: `${backgroundColor}`,
    },
    inputContainer: {
      height: "70%",
      width: "100%",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.form}>
      <View style={styles.inputContainer}>{children}</View>
      <Button variant={"outlineButton"} onPress={onSubmit} />
    </View>
  );
};

// export default Form;

export default Form;
