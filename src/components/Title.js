import { Text, StyleSheet } from 'react-native';

{/*componente que mostra o titulo da calculadora*/}
const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

{/*configuracoes para deixar mais agradavel visualmente*/}
const styles = StyleSheet.create({
    title: {
        color: '#ECECEC',
        fontSize: 27,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
});

export default Title;