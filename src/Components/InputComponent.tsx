import React from 'react';
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';

interface Props<T> extends TextInputProps {
  placeholder: string;
  changeForm: (property: keyof T, value: string) => void;
  property: keyof T;
  isPassword?: boolean;
}

export const InputComponent = <T extends {}>({
  placeholder,
  changeForm,
  property,
  isPassword = false,
  style,
  ...rest
}: Props<T>) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isPassword}
        onChangeText={(value) => changeForm(property, value)}
        style={[styles.input, style]}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    fontSize: 16,
  },
});
