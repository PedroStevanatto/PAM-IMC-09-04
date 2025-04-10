import React from 'react';
import { Text, StyleSheet } from 'react-native';

const Classificar = ({imc}) => {
    if (imc < 18.5){
        return(
            <Text style={StyleSheet.Classificar}>Você está abaixo do peso</Text>
        );
    }else if (imc >= 18.5 && imc <= 24.9){
        return(
            <Text style={StyleSheet.Classificar}>Você está no peso normal</Text>
        );
    }else if (imc >= 25 && imc <= 29.9){
        return(
            <Text style={StyleSheet.Classificar}>Você está com sobrepeso</Text>
        );
    }else if (imc >= 30 && imc <= 34.9){
        return(
            <Text style={StyleSheet.Classificar}>Você está com obesidade grau I</Text>
        );
    }else if (imc >= 35 && imc <= 39.9){
        return(
            <Text style={StyleSheet.Classificar}>Você está obesidade grau II</Text>
        );
    }else if (imc >= 40){
        return(
            <Text style={StyleSheet.Classificar}>Você está com obesidade grau III</Text>
        );
    }
}

export default Classificar;