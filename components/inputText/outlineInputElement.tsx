import React, { SetStateAction } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import {
  SMALL_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  LARGE_FONT_SIZE,
} from "./constants";
import { determineFontSize } from "./functions";

type OutlineInputElementProps = {
  value?: string;
  onChangeValue?: React.Dispatch<SetStateAction<string>>;
  placeholderTextColor?: string;
  outlineColor?: string;
  fontSize?: string;
};

const OutlineInputElement: React.FC<OutlineInputElementProps> = ({
  value,
  onChangeValue,
  placeholderTextColor,
  outlineColor,
  fontSize,
}) => {
  const styles = StyleSheet.create({
    input: {
      borderColor: outlineColor ? outlineColor : "black",
      color: placeholderTextColor ? placeholderTextColor : "black",
      borderWidth: 2,
      borderRadius: 5,
      borderStyle: "solid",
      paddingVertical: 4,
      paddingHorizontal: 5,
      marginVertical: 4,
      fontSize: determineFontSize(
        fontSize,
        SMALL_FONT_SIZE,
        MEDIUM_FONT_SIZE,
        LARGE_FONT_SIZE
      ),
    },
  });

  return (
    <View>
      <TextInput
        placeholder={value}
        placeholderTextColor={placeholderTextColor}
        style={styles.input}
        onChangeText={(text) => onChangeValue(text)}
      />
    </View>
  );
};

export default OutlineInputElement;
