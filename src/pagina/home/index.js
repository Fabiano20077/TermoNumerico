import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Pressable, FlatList } from 'react-native-web';
import styles from './style';
import { useEffect, useState } from 'react';

export default function App() {

    const [nume, setNum] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const novosNumeros = Array.from({ length: 4 }, () => Math.floor(Math.random() * 4));
        setNum(novosNumeros)
    }, [])


    console.log(nume)
    const [p, setP] = useState()

    const [Lista, setLista] = useState([
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', '']
    ]);


    const addLista = (num) => {


        setLista(pre => {
            const copia = pre.map(row => [...row]);
            copia[0][p] = num;
            return copia
        })
    }

    const verificar =()=> {

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
                                            <Pressable onPress={() => setP(0)}>
                                                <Text style={styles.texto}> {item[0]}  </Text>
                                            </Pressable>
                                        </View>

                                        <View style={[styles.containeNumero, { backgroundColor: p == 1 ? 'green' : 'rgba(0,0,0,.8)' }]} >
                                            <Pressable onPress={() => setP(1)}>
                                                <Text style={styles.texto}> {item[1]}  </Text>
                                            </Pressable>
                                        </View>

                                        <View style={styles.containeNumero} >
                                            <Pressable onPress={() => setP(2)}>
                                                <Text style={styles.texto}> {item[2]}  </Text>
                                            </Pressable>
                                        </View>

                                        <View style={styles.containeNumero} >
                                            <Pressable onPress={() => setP(3)}>

                                                <Text style={styles.texto}> {item[3]}  </Text>
                                            </Pressable>
                                        </View>

                                    </View>

                                )}
                            />

                        </View>
                    </View>

                    <View style={styles.containerInput}>

                        <Pressable style={styles.input} onPress={() => addLista(1)}>
                            <Text> 1 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(2)}>
                            <Text> 2 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(3)}>
                            <Text> 3 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(4)}>
                            <Text> 4 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(5)}>
                            <Text> 5 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(6)}>
                            <Text> 6</Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(7)}>
                            <Text> 7 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(8)}>
                            <Text> 8 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(9)}>
                            <Text> 9 </Text>
                        </Pressable>

                        <Pressable style={styles.input} onPress={() => addLista(0)}>
                            <Text> 0 </Text>
                        </Pressable>
                        <View>
                            <Pressable style={styles.botao} onPress={()=> verificar()}>
                                <Text> verificar</Text>
                            </Pressable>

                        </View>
                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}