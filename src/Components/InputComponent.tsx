import React from "react";
import { TextInput, View, StyleSheet, KeyboardTypeOptions } from "react-native";

type FormFields = "usuario" | "clave" | "email" | "telefono" | "direccion";

type Props = {
  placeholder: string;
  keyboardType: KeyboardTypeOptions;
  changeForm: (property: FormFields, value: string) => void;
  property: FormFields;
  isPassword?: boolean;
};

export const InputComponent = ({
  placeholder,
  keyboardType,
  changeForm,
  property,
  isPassword = false,
}: Props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
        style={styles.input}
        onChangeText={(value) => changeForm(property, value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
  },
});
