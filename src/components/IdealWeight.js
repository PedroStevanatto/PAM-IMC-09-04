import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Ideal = ({altura}) => {
    let pesoMinIdeal = 18.5 * (altura  * altura)/10000;
    let pesoMaxIdeal = 24.9 * (altura * altura)/10000;

    return (
        <Text style={StyleSheet.Classificar}>Seu peso ideal está entre {pesoMinIdeal.toFixed(2)} kg e {pesoMaxIdeal.toFixed(2)} kg</Text>
    );
}

export default Ideal;