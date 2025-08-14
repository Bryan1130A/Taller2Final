import React, { useState } from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Phone } from './Pantalla3Screans';
import { Icon } from 'react-native-vector-icons/Icon';
import { ModalProduct } from './ProductModel';


interface Props {
  item: Phone; 
}

export const CardProduct = ({ item }: Props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <View>
      <View style={styles.container}>
        <Image source={{ uri: item.pathImage }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>Precio: ${item.price.toFixed(2)}</Text>
          <Text>Stock: {item.stock}</Text>
        </View>
        <View style={styles.containerIcon}>
          <Icon
            name="add-shopping-cart"
            size={30}
            color={`blue`}
            onPress={() => setShowModal(!showModal)}
          />
        </View>
      </View>

      <ModalProduct
        visible={showModal}
        item={item}
        setShowModal={() => setShowModal(!showModal)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 2,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 10,
  },
  info: {
    flexShrink: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  containerIcon: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
