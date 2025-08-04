import React, { useState } from "react";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../../theme/app.theme";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";


type Props = StackScreenProps<RootStackParams, "Pantalla1">;

export const Pantalla1Screens = ({ navigation }: Props) => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");



  return (
    <View style={styles.container}>
  <Image
    style={styles.logo}
     source={require('../../assets/img/image-removebg-preview.png')}
  />
  <Text style={styles.title}>Iniciar Sesión</Text>

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
    secureTextEntry
  />
  <Button
    title="Iniciar sesión"
    onPress={() => console.log("Sesión iniciada")}
  />
  <Button
    onPress={() => navigation.navigate("Pantalla2")}
    title="Registarse"
  />
  <Text style={{ marginTop: 10 }}>
    Si no posees una cuenta por favor regístrate.
  </Text>
</View>

  );
};
