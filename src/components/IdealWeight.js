import React from 'react';
import { Text, StyleSheet } from 'react-native';

{/*componente que calcula o peso minimo e maximo ideais*/}
const Ideal = ({altura}) => {
    let pesoMinIdeal = 18.5 * (altura  * altura)/10000;
    let pesoMaxIdeal = 24.9 * (altura * altura)/10000;

    {/*retorna o resultado*/}
    return (
        <Text style={styles.Classificar}>Seu peso ideal está entre {pesoMinIdeal.toFixed(2)} kg e {pesoMaxIdeal.toFixed(2)} kg</Text>
    );
}

    {/*configuracoes para deixar mais agradavel visualmente*/}
    const styles = StyleSheet.create({
        Classificar: {
            fontSize: 16,
            color: '#CDCDCD',
            marginTop: 10,
            textAlign: 'center',
        },
    });

export default Ideal;