import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, Text } from "react-native";
import { SMALL_SIZE, MEDIUM_SIZE, LARGE_SIZE } from "./constants";
import { determineSize } from "./functions";
import SolidCheckbox from "./solidCheckbox";
import OutlineCheckbox from "./outlineCheckbox";
import GhostCheckbox from "./ghostCheckbox";

type CheckboxProps = {
  size?: "sm" | "md" | "lg";
  style?: string;
  color?: string;
  background?: string;
  text?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  size,
  style,
  color,
  background,
  text,
}) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  const [checkBoxState, setCheckBoxState] = useState<boolean>(false);
  const [checkBoxTick, setCheckBoxTick] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          setCheckBoxState(!checkBoxState), setCheckBoxTick(!checkBoxTick);
        }}
      >
        {style === undefined && (
          <SolidCheckbox
            size={size}
            color={color}
            background={background}
            checkBoxTick={checkBoxTick}
          />
        )}
        {style === "solid" && (
          <SolidCheckbox
            size={size}
            color={color}
            background={background}
            checkBoxTick={checkBoxTick}
          />
        )}
        {style === "outline" && (
          <OutlineCheckbox
            size={size}
            color={color}
            checkBoxTick={checkBoxTick}
          />
        )}
        {style === "ghost" && (
          <GhostCheckbox
            size={size}
            background={background}
            checkBoxTick={checkBoxTick}
          />
        )}
      </Pressable>
      <Text>{text}</Text>
    </View>
  );
};

export default Checkbox;
