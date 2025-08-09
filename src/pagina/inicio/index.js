import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, FlatList, Modal } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export default function App() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.containerInicio}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.titulo}> Termo </Text>
                    <Text style={styles.titulo}> Numerico</Text>
                </View>
                <View style={styles.opcoes}>

                    <Pressable onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.Texto}> Inicio  </Text>
                    </Pressable>

                    <Pressable onPress={() => ir()}>
                        <Text style={styles.Texto}> Quem somos  </Text>
                    </Pressable>

                    <Pressable onPress={() => ir()}>
                        <Text style={styles.Texto}> Como Funciona  </Text>
                    </Pressable>


                </View>

            </View>



        </View>

    );
}