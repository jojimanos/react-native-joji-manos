import React, { useEffect, useRef } from "react";
import { Animated, View, StyleSheet, Easing } from "react-native";

type CheckBoxTickProps = {
  checkBoxTick: boolean;
};

const CheckBoxTick: React.FC<CheckBoxTickProps> = ({ checkBoxTick }) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, [checkBoxTick]);

  const startAnimation = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
      easing: Easing.bezier(0.175, 0.885, 0.32, 1.275),
    }).start();
  };

  const scaleStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <View style={styles.container}>
      <View style={styles.checkBox}>
        <Animated.View style={[styles.tick, scaleStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  checkBox: {
    width: "70%",
    height: "70%",
  },
  tick: {
    width: "100%",
    height: "100%",
    backgroundColor: "red",
    borderRadius: 10,
  },
});

export default CheckBoxTick;
