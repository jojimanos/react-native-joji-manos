import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
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
};

const Checkbox: React.FC<CheckboxProps> = ({
  size,
  style,
  color,
  background,
}) => {
  const styles = StyleSheet.create({});

  const [checkBoxState, setCheckBoxState] = useState<boolean>(false);
  const [checkBoxTick, setCheckBoxTick] = useState<boolean>(false);

  return (
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
  );
};

export default Checkbox;
