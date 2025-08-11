import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  containerForm: {
    marginBottom: 20,
    position: 'relative',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  titleWelcome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 50,
    margin: 12,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
  },
  logo: {
  width: 120,
  height: 120,
  resizeMode: 'contain',
  alignSelf: 'center',
  marginBottom: 20,
  
},
  iconForm: {
    position: 'absolute',
    right: 10,
    top: 40,
    zIndex: 1,
  },
  textDescription: {
    fontSize: 14,
    marginBottom: 15,
    color: '#666',
  },
  textRedirect: {
    textAlign: 'center',
    color: `blue`,
    marginTop: 15,
    textDecorationLine: 'underline',
  },


});
