import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const PrimaryButton = ({ title }: { title: string }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
