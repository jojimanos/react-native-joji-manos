import React from "react";
import { StyleSheet, View } from "react-native";
import { SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE } from "./constants";
import { determineSize } from "./functions";
import CheckboxTick from "./checkBoxTick";

type CheckboxProps = {
  size?: "sm" | "md" | "lg";
  color?: string;
  background?: string;
  checkBoxTick: boolean;
};

const SolidCheckbox: React.FC<CheckboxProps> = ({
  size,
  color,
  background,
  checkBoxTick,
}) => {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: color ? color : "black",
      backgroundColor: background,
      height: determineSize(size, SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE),
      width: determineSize(size, SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE),
      margin: 3,
      borderRadius: 5,
      shadowColor: background ? background : "black",
      shadowOffset: { width: 5, height: 5 },
      shadowOpacity: 0.5,
    },
    centerTick: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      {checkBoxTick && (
        <CheckboxTick color={color} checkBoxTick={checkBoxTick} />
      )}
    </View>
  );
};

export default SolidCheckbox;
