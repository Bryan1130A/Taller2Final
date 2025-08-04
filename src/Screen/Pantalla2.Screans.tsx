import React, { useState } from 'react';
import { styles } from '../../theme/app.theme';
import { Button, Text, TextInput, View } from 'react-native';

export const Pantalla2Screens = () => {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        onChangeText={setUsuario}
        value={usuario}
        placeholder="Usuario"
      />

      <TextInput
        style={styles.input}
        onChangeText={setClave}
        value={clave}
        placeholder="Contraseña"
        
      />

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Correo Electrónico"
        
      />

      <TextInput
        style={styles.input}
        onChangeText={setTelefono}
        value={telefono}
        placeholder="Teléfono"
        
      />

      <TextInput
        style={styles.input}
        onChangeText={setDireccion}
        value={direccion}
        placeholder="Dirección"
      />
      <Button
        onPress={() => console.log("Usuario registrado")}
        title="Registarse"
      />
    </View>
  );
};
