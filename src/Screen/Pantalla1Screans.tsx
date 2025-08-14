import React, { useState, useContext } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigator/StackNavigator";
import { UserContext } from "../Context/UserContext";
import { styles } from "../../theme/app.theme";
import { InputComponent } from "../Components/InputComponent";
import { ButtonComponent } from "../Components/ButtonComponent";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Alert, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = StackScreenProps<RootStackParams, "Pantalla1">;

interface LoginForm {
  usuario: string;
  clave: string;
}

export const Pantalla1Screens = ({ navigation }: Props) => {
  const [formLogin, setFormLogin] = useState<LoginForm>({
    usuario: "",
    clave: "",
  });

  const [hiddenPassword, setHiddenPassword] = useState(true);
  const { users } = useContext(UserContext);

  const changeForm = (property: string, value: string): void => {
    setFormLogin({ ...formLogin, [property]: value });
  };

  const verifyUser = (): LoginForm | undefined => {
    return users.find(
      (u) => u.usuario === formLogin.usuario && u.clave === formLogin.clave
    );
  };

  const handleLogin = (): void => {
    const { usuario, clave } = formLogin;

    if (!usuario.trim() || !clave.trim()) {
      Alert.alert("Error", "Por favor completa todos los campos");
      return;
    }

    if (!verifyUser()) {
      Alert.alert("Error", "Usuario o contraseña incorrectos");
      return;
    }

    Alert.alert("Bienvenido", `Hola, ${usuario}`);
    navigation.navigate("Pantalla3");
  };

  return (
    <View style={localStyles.container}>
      <StatusBar backgroundColor="#007AFF" barStyle="light-content" />

      <Image
        source={require("../../assets/img/image-removebg-preview.png")}
        style={localStyles.logo}
        resizeMode="contain"
      />

      <Text style={[styles.titleWelcome, localStyles.centerText]}>
        ¡Bienvenido de nuevo!
      </Text>
      <Text style={[styles.textDescription, localStyles.centerText]}>
        Ingresa para continuar con tu cuenta
      </Text>

      <View style={localStyles.formContainer}>
        <InputComponent
          placeholder="Usuario"
          keyboardType="default"
          changeForm={changeForm}
          property="usuario"
        />

        <View style={localStyles.passwordContainer}>
          <InputComponent
            placeholder="Contraseña"
            keyboardType="default"
            changeForm={changeForm}
            property="clave"
            isPassword={hiddenPassword}
            style={{ flex: 1 }}
          />
          <TouchableOpacity
            onPress={() => setHiddenPassword(!hiddenPassword)}
            style={localStyles.iconTouchable}
          >
            <Icon
              name={hiddenPassword ? "visibility" : "visibility-off"}
              size={24}
              color="#007AFF"
            />
          </TouchableOpacity>
        </View>
      </View>

      <ButtonComponent textButton="Iniciar sesión" handleLogin={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate("Pantalla2")}>
        <Text style={[styles.textRedirect, localStyles.centerText]}>
          ¿No tienes una cuenta? Regístrate ahora
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const localStyles = StyleSheet.create({ //hola
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  centerText: {
    textAlign: "center",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  formContainer: {
    width: "100%",
    marginVertical: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  iconTouchable: {
    padding: 8,
  },
});
