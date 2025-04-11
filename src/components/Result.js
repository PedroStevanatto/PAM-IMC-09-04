import React from 'react';
import { Text, StyleSheet } from 'react-native';

{/*componente que mostra o resultado do imc*/}
const Result = ({ imc }) => {
    return(
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
    );
};

{/*configuracoes para deixar mais agradavel visualmente*/}
const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#CDCDCD',
    },
});

export default Result;