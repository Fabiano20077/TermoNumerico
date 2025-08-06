import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native-web';
import styles from './style';
import { useEffect, useState } from 'react';

export default function App() {



    const [num, setNum] = useState([0, 0, 0, 0]);
    const [Lista, setLista] = useState([
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', '']
    ]);

    // const numero = [0,0,0,0]

    /*  const addArray = (num) => {
 
 
         const novoItem = {
             valor: num
         }
 
         const updateAray = [...Lista, novoItem];
         setLista(updateAray);
 
         setNum('');
     } */

    const addLista = (num) => {

        

    }


    return (
        <View style={styles.container}>
            <View style={styles.Campo}>
                <View style={styles.tela}>
                    <View style={styles.numero}>

                        <View>
                            <Text style={styles.Titulo}>Termo Numerico</Text>
                        </View>
                        <View>


                            <FlatList
                                data={Lista}
                                keyExtractor={(item) => item.valor}
                                contentContainerStyle={{ padding: 20 }}
                                renderItem={({ item, index }) => (

                                    <View style={styles.flat}>


                                        <View style={styles.containeNumero} >
                                            <Text style={styles.texto}> {item[0]}  </Text>
                                        </View>

                                        <View style={styles.containeNumero} >
                                            <Text style={styles.texto}> {item[1]}  </Text>
                                        </View>

                                        <View style={styles.containeNumero} >
                                            <Text style={styles.texto}> {item[2]}  </Text>
                                        </View>

                                        <View style={styles.containeNumero} >
                                            <Text style={styles.texto}> {item[3]}  </Text>
                                        </View>

                                    </View>

                                )}
                            />

                        </View>
                    </View>

                    <View style={styles.containerInput}>

                        <Pressable style={styles.input} onPress={addLista(1)}>
                            <Text> 1 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={addLista(2)}>
                            <Text> 2 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={addLista(3)}>
                            <Text> 3 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={addLista(4)}>
                            <Text> 4 </Text>
                        </Pressable>

                    </View>
                </View>
                <View style={styles.teclado}>

                    <Pressable style={styles.botao} onPress={() => addArray(num)}>
                        <Text style={styles.veri}> verificar </Text>
                    </Pressable>

                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}