import { View, TextInput, Button, StyleSheet} from 'react-native';
import Result from './Result';
import { useState } from 'react';
import Classificar from './Classification';
import Ideal from './IdealWeight';

{/*armazena os valores de peso, altura e imc*/}
const FormIMC = () => {
    const[peso, setPeso] = useState('');
    const[altura, setAltura] = useState('');
    const[imc, setImc] = useState(null);

    {/*verifica se todos os campos foram preenchidos e calcula o imc*/}
    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            console.log(imcCalculado);
            setImc(imcCalculado);
        }
    };

    {/*coloca as coisas na tela (campos de entrada)*/}
    return (
        <View style={styles.formContainer}>
            {/*so aceita numeros*/}
            <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            placeholderTextColor="#A1A5AA"
            keyboardType="numeric" 
            value={peso}
            onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                placeholderTextColor="#A1A5AA"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />

            {/*o botao so funciona se nao tiver ',' na altura*/}
            <Button title="Calcular IMC" onPress={calcularIMC} disabled={altura.includes(',')}/> 
            
            {/*se o imc foi calculado corretamente exibe os resultados*/}
            {imc && (
                <>
                    <Result imc={imc}/>
                    <Classificar imc={imc}/>
                    <Ideal altura={altura}/>
                </>
            )}
        </View>
    );
};

{/*configuracoes para deixar mais agradavel*/}
const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: '#262831',
        padding: 25,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
        color: '#BDC1C6',
    },
});

export default FormIMC;