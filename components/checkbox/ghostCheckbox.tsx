import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE } from "./constants";
import { determineSize } from "./functions";
import CheckboxTick from "./checkBoxTick";

type CheckboxProps = {
  size?: "sm" | "md" | "lg";
  background?: string;
  checkBoxTick: boolean;
};

const GhostCheckbox: React.FC<CheckboxProps> = ({
  size,
  background,
  checkBoxTick,
}) => {
  const styles = StyleSheet.create({
    container: {
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: background ? background : "grey",
      backgroundColor: background ? background : "grey",
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

export default GhostCheckbox;
