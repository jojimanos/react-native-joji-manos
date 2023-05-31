import React, { SetStateAction } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import {
  LARGE_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  SMALL_FONT_SIZE,
} from "./constants";
import { determineFontSize } from "./functions";

type SolidInputElementProps = {
  value: string;
  onChangeValue: React.Dispatch<SetStateAction<string>>;
  placeholderTextColor: string;
  fontSize: string;
};

const SolidInputElement: React.FC<SolidInputElementProps> = ({
  value,
  onChangeValue,
  placeholderTextColor,
  fontSize,
}) => {
  const placeholderColor = placeholderTextColor;

  const styles = StyleSheet.create({
    input: {
      width: "100%",
      paddingVertical: 4,
      paddingHorizontal: 5,
      marginVertical: 4,
      borderRadius: 5,
      shadowColor: "gray",
      shadowOpacity: 0.7,
      shadowOffset: { width: 3, height: 3 },
      backgroundColor: "white",
      fontSize: determineFontSize(
        fontSize,
        SMALL_FONT_SIZE,
        MEDIUM_FONT_SIZE,
        LARGE_FONT_SIZE
      ),
    },
  });

  return (
    <View style={{ width: "100%" }}>
      <TextInput
        placeholder={value}
        placeholderTextColor={placeholderColor}
        style={styles.input}
        onChangeText={(text) => onChangeValue(text)}
      />
    </View>
  );
};

export default SolidInputElement;
