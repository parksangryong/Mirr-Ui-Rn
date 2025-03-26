import React from "react";
import { TextInput, StyleSheet, TextInputProps } from "react-native";

interface BasicInputProps extends TextInputProps {}

const BasicInput = ({ ...props }: BasicInputProps) => {
  return <TextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
  },
});
export default BasicInput;
