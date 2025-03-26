import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { useTheme } from "../../theme/ThemeContext";

const PrimaryButton = ({ title }: { title: string }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.primary }]}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
