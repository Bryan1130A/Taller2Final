import React, { useState } from 'react';
import { FlatList, StatusBar, View, StyleSheet, Text } from 'react-native';
import { CardProduct } from './CarProduct';

export interface Phone {
  id: number;
  name: string;
  price: number;
  stock: number;
  pathImage: string;
}

export const Pantalla3Screen = () => {
  const [cart, setCart] = useState<Phone[]>([]);

  const phones: Phone[] = [
    {
      id: 1,
      name: 'iPhone 14 Pro',
      price: 999.99,
      stock: 5,
      pathImage:
        'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone14pro-digitalmat-gallery-1-202209?wid=2000&hei=1536&fmt=jpeg&qlt=95&.v=1663703840478',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      price: 1199.99,
      stock: 4,
      pathImage:
        'https://images.samsung.com/is/image/samsung/p6pim/latin/2302/gallery/latin-galaxy-s23-ultra-s918-sm-s918blgmlat-thumb-534174828',
    },
    {
      id: 3,
      name: 'Google Pixel 7 Pro',
      price: 899.99,
      stock: 6,
      pathImage: 'https://store.google.com/product/images/pixel_7_pro.png',
    },
    {
      id: 4,
      name: 'Xiaomi 13 Pro',
      price: 799.99,
      stock: 8,
      pathImage: 'https://i02.appmifile.com/472_operatorx_operatorx_opx/28/12/2022/7c6f3e7b.png',
    },
    {
      id: 5,
      name: 'OnePlus 11',
      price: 749.99,
      stock: 10,
      pathImage:
        'https://image01.oneplus.net/ebp/202302/08/1-m00-49-84-rb8bw2qei7oajq7zaakjw6lwnw4907_840_840.png',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={`blue`} />
      <Text style={styles.title}>Teléfonos</Text>
      <FlatList
        data={phones}
        renderItem={({ item }) => <CardProduct item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: `blue`,
    marginBottom: 10,
  },
});
