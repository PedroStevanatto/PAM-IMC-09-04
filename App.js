import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/formIMC';

{/*componente principal que puxa outros e faz tudo rodar*/}
export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC/>
    </View>
  );
}

{/*configuracoes para deixar mais agradavel visualmente*/}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    padding: 16,
    backgroundColor: '#101218'
  },
});
