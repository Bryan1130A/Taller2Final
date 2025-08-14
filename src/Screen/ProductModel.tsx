import React, { useState } from 'react';

import { Phone } from './Pantalla3Screans';
import { Icon } from 'react-native-vector-icons/Icon';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';


interface Props {
  visible: boolean;
  item: Phone;
  setShowModal: () => void;
}

export const ModalProduct = ({ visible, item, setShowModal }: Props) => {
  const { width } = useWindowDimensions();
  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const total = item ? item.price * quantity : 0;

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View style={styles.containerModal}>
        <View style={[styles.modal, { width: width * 0.85 }]}>
          <View style={{ alignItems: 'flex-end' }}>
            <Icon
              name="cancel"
              size={28}
              color={`blue`}
              onPress={setShowModal}
            />
          </View>

          <Text style={styles.title}>
            {item?.name || 'Teléfono sin nombre'}
          </Text>

          {item?.pathImage && (
            <Image
              source={{ uri: item.pathImage }}
              style={styles.image}
            />
          )}

          <View style={styles.containerQuantity}>
            <TouchableOpacity
              style={styles.buttonQuantity}
              onPress={decreaseQuantity}
            >
              <Text style={styles.buttonQuantityText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.textQuantity}>{quantity}</Text>

            <TouchableOpacity
              style={styles.buttonQuantity}
              onPress={increaseQuantity}
            >
              <Text style={styles.buttonQuantityText}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.totalText}>
            Total: ${total.toFixed(2)}
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  containerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'contain',
  },
  containerQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonQuantity: {
    width: 40,
    height: 40,
    backgroundColor: `blue`,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonQuantityText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  textQuantity: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  totalText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
