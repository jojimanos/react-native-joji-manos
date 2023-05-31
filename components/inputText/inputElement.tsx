import React, { SetStateAction } from "react";
import { StyleSheet, TextInput } from "react-native";
import OutlineInputElement from "./outlineInputElement";
import SolidInputElement from "./solidInputElement";

type InputElementProps = {
  value: string;
  onChangeValue: React.Dispatch<SetStateAction<string>>;
  placeholderTextColor: string;
  outline: boolean;
  fontSize;
};

const InputElement: React.FC<InputElementProps> = ({
  value,
  onChangeValue,
  placeholderTextColor,
  outline,
  fontSize,
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
      {!outline ? (
        <SolidInputElement
          value={value}
          placeholderTextColor={placeholderTextColor}
          onChangeValue={(text) => onChangeValue(text)}
          fontSize={fontSize}
        />
      ) : (
        <OutlineInputElement
          value={value}
          placeholderTextColor={placeholderTextColor}
          onChangeValue={(text) => onChangeValue(text)}
          outlineColor={"red"}
          fontSize={fontSize}
        />
      )}
    </>
  );
};
export default InputElement;
