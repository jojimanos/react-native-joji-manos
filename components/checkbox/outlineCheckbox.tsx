import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE } from "./constants";
import { determineSize } from "./functions";
import Checkbox from "./checkbox";
import CheckboxTick from "./checkBoxTick";

type CheckboxProps = {
  size?: "sm" | "md" | "lg";
  color?: string;
  checkBoxTick: boolean;
};

const OutlineCheckbox: React.FC<CheckboxProps> = ({
  size,
  color,
  checkBoxTick,
}) => {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: color,
      height: determineSize(size, SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE),
      width: determineSize(size, SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE),
      margin: 3,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}>
      {checkBoxTick && <CheckboxTick checkBoxTick={checkBoxTick} />}
    </View>
  );
};

export default OutlineCheckbox;
