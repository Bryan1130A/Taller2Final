import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  textButton: string;
  handleLogin: () => void;
}

export const ButtonComponent = ({ textButton, handleLogin }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleLogin}>
      <Text style={styles.text}>{textButton}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
