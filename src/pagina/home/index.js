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
    const [c, setC] = useState(0);
    const [l, setL] = useState(0);
   const [index,setIndex] = useState(0);

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
            copia[l][c] = num;
            return copia
        })
    }

    const verificar = () => {

       for(var i = 0;i<=3;i++){
            if(Lista[index][i] == nume[i] ){
                console.log(`voce acertou a posicao ${i} ${index}`)
                 nume[i]
            } else {
                console.log(` errou ${i} ${index}`)
            }
       }


        const novoIndex = index + 1;
        
        setIndex(novoIndex);
        console.log(index)
    }
console.log(l)
console.log(c)
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
                                keyExtractor={(_, index) => index.toString()}
                                contentContainerStyle={{ padding: 20 }}
                                renderItem={({ item }) => (

                                    <View style={styles.flat}>


                                        <View  style={[styles.containeNumero, { backgroundColor: c == 0 && l == index ? 'green' : 'rgba(0,0,0,.8)' }]} >
                                            <Pressable onPress={() => { setC(0); setL(index); }}>
                                                <Text style={styles.texto}> {item[0]}  </Text>
                                            </Pressable>
                                        </View>

                                        <View  style={[styles.containeNumero, { backgroundColor: c == 1 && l === index ? 'green' :   'rgba(0,0,0,.8)'  }]} >
                                            <Pressable onPress={() => { setC(1); setL(index) }} >
                                                <Text style={styles.texto}> {item[1]}  </Text>
                                            </Pressable>
                                        </View>

                                        <View style={[styles.containeNumero, { backgroundColor: c == 2 && l === index ? 'green' : 'rgba(0,0,0,.8)' }]} >
                                            <Pressable onPress={() => { setC(2); setL(index) }}>
                                                <Text style={styles.texto}> {item[2]}  </Text>
                                            </Pressable>
                                        </View>

                                        <View  style={[styles.containeNumero, { backgroundColor: c == 3 && l === index ? 'green' : 'rgba(0,0,0,.8)' }]} >
                                            <Pressable onPress={() => { setC(3); setL(index) }}>

                                                <Text style={styles.texto}> {item[3]}  </Text>
                                            </Pressable>
                                        </View>

                                    </View>

                                )}
                            />

                        </View>
                    </View>

                    <View style={styles.containerInput}>

                        {/*    <Pressable style={styles.input} onPress={() => addLista(1)}>
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
                        </Pressable> */}

                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((n) => (
                            <Pressable key={n} style={styles.input} onPress={() => addLista(n)}>
                                <Text> {n} </Text>
                            </Pressable>
                        ))}
                        <View>

                            <Pressable style={styles.botao} onPress={() => verificar()}>
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