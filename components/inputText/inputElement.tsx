import React, { SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";
import OutlineInputElement from "./outlineInputElement";
import SolidInputElement from "./solidInputElement";

type InputElementProps = {
  value?: string;
  onChangeValue?: React.Dispatch<SetStateAction<string>>;
  placeholderTextColor?: string;
  outlineColor?: string;
  backgroundColor?: string;
  fontSize?: string;
  style?: string;
};

const InputElement: React.FC<InputElementProps> = ({
  value,
  onChangeValue,
  placeholderTextColor,
  outlineColor,
  backgroundColor,
  fontSize,
  style,
}) => {
  const placeholderColor = placeholderTextColor;

  const styles = StyleSheet.create({
    input: {
      paddingVertical: 4,
      paddingHorizontal: 5,
      marginVertical: 4,
    },
  });

  return (
    <>
      {style === "solid" && (
        <SolidInputElement
          value={value}
          placeholderTextColor={placeholderTextColor}
          onChangeValue={(text) => onChangeValue(text)}
          fontSize={fontSize}
          backgroundColor={backgroundColor}
        />
      )}
      {style === "outline" && (
        <OutlineInputElement
          value={value}
          placeholderTextColor={placeholderTextColor}
          onChangeValue={(text) => onChangeValue(text)}
          outlineColor={outlineColor}
          fontSize={fontSize}
        />
      )}
    </>
  );
};
export default InputElement;
