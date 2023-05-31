import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

type ButtonProps = {
  onPress: () => Promise<void>;
  variant;
};

const Button: React.FC<ButtonProps> = ({ onPress, variant }) => {
  return (
    <View style={styles.buttonContainer}>
      <View>
        <View style={styles[`${variant}`]}>
          <Pressable onPress={onPress}>
            <Text>Submit</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outlineButton: {
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 4,
    borderWidth: 2,
    padding: 2,
  },
  solidButton: {
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 4,
    borderWidth: 2,
    padding: 2,
    backgroundColor: "azure",
  },
  buttonContainer: {
    height: "30%",
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button;
