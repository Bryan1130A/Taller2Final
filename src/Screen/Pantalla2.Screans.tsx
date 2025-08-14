import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { styles } from '../../theme/app.theme';
import { InputComponent } from '../Components/InputComponent';
import { ButtonComponent } from '../Components/ButtonComponent';

interface FormRegister {
  usuario: string;
  clave: string;
  email: string;
  telefono: string;
  direccion: string;
}

type FormRegisterKeys = keyof FormRegister;

export const Pantalla2Screens = () => {
  const [formRegister, setFormRegister] = useState<FormRegister>({
    usuario: '',
    clave: '',
    email: '',
    telefono: '',
    direccion: ''
  });

  const changeForm = (property: FormRegisterKeys, value: string): void => {
    setFormRegister({ ...formRegister, [property]: value });
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateTelefono = (telefono: string) => {
    const regex = /^[0-9]{7,15}$/;
    return regex.test(telefono);
  };

  const handleRegister = (): void => {
    const { usuario, clave, email, telefono, direccion } = formRegister;

    if (!usuario.trim()) {
      Alert.alert('Error', 'El campo usuario es obligatorio');
      return;
    }
    if (usuario.length < 3) {
      Alert.alert('Error', 'El usuario debe tener al menos 3 caracteres');
      return;
    }

    if (!clave.trim()) {
      Alert.alert('Error', 'El campo contraseña es obligatorio');
      return;
    }
    if (clave.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (!email.trim()) {
      Alert.alert('Error', 'El campo correo electrónico es obligatorio');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Error', 'Correo electrónico inválido');
      return;
    }

    if (!telefono.trim()) {
      Alert.alert('Error', 'El campo teléfono es obligatorio');
      return;
    }
    if (!validateTelefono(telefono)) {
      Alert.alert('Error', 'Teléfono inválido. Solo números entre 7 y 15 dígitos');
      return;
    }

    if (!direccion.trim()) {
      Alert.alert('Error', 'El campo dirección es obligatorio');
      return;
    }

    console.log('Usuario registrado:', formRegister);

    Alert.alert('Registro exitoso', 'Usuario registrado correctamente');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrooo</Text>

      <InputComponent placeholder="Usuario" property="usuario" changeForm={changeForm} keyboardType="default" />
      <InputComponent placeholder="Contraseña" property="clave" changeForm={changeForm} keyboardType="default" isPassword />
      <InputComponent placeholder="Correo Electrónico" property="email" changeForm={changeForm} keyboardType="email-address" />
      <InputComponent placeholder="Teléfono" property="telefono" changeForm={changeForm} keyboardType="phone-pad" />
      <InputComponent placeholder="Dirección" property="direccion" changeForm={changeForm} keyboardType="default" />

      <ButtonComponent textButton="Registrar" handleLogin={handleRegister} />
    </View>
  );
};
