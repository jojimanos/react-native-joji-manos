import React, { SetStateAction, useState } from "react";
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
  placeholderTextColor?: string;
  fontSize?: string;
  backgroundColor?: string;
};

const SolidInputElement: React.FC<SolidInputElementProps> = ({
  value,
  onChangeValue,
  placeholderTextColor,
  fontSize,
  backgroundColor,
}) => {
  const styles = StyleSheet.create({
    input: {
      // width: "100%",
      focus: "black",
      color: placeholderTextColor ? placeholderTextColor : "black",
      paddingVertical: 4,
      paddingHorizontal: 5,
      marginVertical: 4,
      borderRadius: 5,
      shadowColor: "gray",
      shadowOpacity: 0.7,
      shadowOffset: { width: 3, height: 3 },
      backgroundColor: backgroundColor ? backgroundColor : "white",
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

export default SolidInputElement;
