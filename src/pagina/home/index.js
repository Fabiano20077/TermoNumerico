import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, FlatList, Modal } from 'react-native';
import styles from './style';
import { useEffect, useState } from 'react';

export default function App() {

    //numero aleatorio

    const [nume, setNum] = useState([]);

    useEffect(() => {
        sortea()
    }, [])

    const sortea = () => {
        const novosNumeros = Array.from({ length: 4 }, () => Math.floor(Math.random() * 9) + 1);
        setNum(novosNumeros)
        setmodal(false);
        setIndex(0);
        setContador(0);
        setLista(Array(6).fill(null).map(() => Array(4).fill('')));
        setCores(Array(6).fill(null).map(() => Array(4).fill('rgba(0,0,0,.8)')));
    }

    console.log(nume)
    const [cores, setCores] = useState(
        Array(6).fill(null).map(() => Array(4).fill('rgba(0,0,0,.8)'))
    );

    //posição
    const [c, setC] = useState();
    const [l, setL] = useState();
    const [index, setIndex] = useState(0);

    const [Lista, setLista] = useState([
        ['', '', '', ''],
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', ''],
        [``, '', '', '']
    ]);

    // modal 
    const [modal, setmodal] = useState(false);
    const [tM, setTM] = useState('você perdeu');
    const [tM2, setTM2] = useState('tentativa');
    const [contador, setContador] = useState(0);

    const addLista = (num) => {

        setLista(pre => {
            const copia = pre.map(row => [...row]);
            copia[index][c] = num;
            return copia
        })
    }

    const verificar = () => {

        /*  if (Lista[index].includes('')) {
             alert('erraddooo')
             return false
         } */

        setCores(prev => {

            const copia = prev.map(row => [...row])

            for (var i = 0; i <= 3; i++) {
                if (Lista[index][i] == nume[i]) {

                    copia[index][i] = 'green';

                } else if (nume.includes(Lista[index][i])) {

                    copia[index][i] = 'orange';

                } else {

                    copia[index][i] = 'rgba(0,0,0,.8)';
                }
            }


            if (copia.flat().filter(x => x == 'green').length >= 4) {
                setTM('voce venceu'),
                setTM2('vitoria')
                    setmodal(true)
            } else {

                const novoIndex = index + 1;
                setIndex(novoIndex);

                setContador(contador + 1)

                if (contador >= 5) {
                    setmodal(true)
                }
            }


            return copia;
        });


    }


    const reiniciar = () => {
        sortea()
    }
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.Campo}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.Titulo}> Termo Numerico</Text>
                </View>

                <View style={styles.numero}>



                    <FlatList
                        data={Lista}
                        keyExtractor={(_, index) => index.toString()}
                        renderItem={({ item, index: indexItem }) => (

                            <View style={styles.flat}>


                                <View style={[styles.containeNumero, { backgroundColor: cores[indexItem][0] }]} >
                                    <Pressable onPress={() => { setC(0); setL(indexItem); }}>
                                        <Text style={styles.texto}> {item[0]}  </Text>
                                    </Pressable>
                                </View>

                                <View style={[styles.containeNumero, { backgroundColor: cores[indexItem][1] }]} >
                                    <Pressable onPress={() => { setC(1); setL(index) }} >
                                        <Text style={styles.texto}> {item[1]}  </Text>
                                    </Pressable>
                                </View>

                                <View style={[styles.containeNumero, { backgroundColor: cores[indexItem][2] }]} >
                                    <Pressable onPress={() => { setC(2); setL(index) }}>
                                        <Text style={styles.texto}> {item[2]}  </Text>
                                    </Pressable>
                                </View>

                                <View style={[styles.containeNumero, { backgroundColor: cores[indexItem][3] }]} >
                                    <Pressable onPress={() => { setC(3); setL(index) }}>

                                        <Text style={styles.texto}> {item[3]}  </Text>
                                    </Pressable>
                                </View>


                            </View>

                        )}
                    />


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
                        <Pressable key={n} style={[styles.input]} onPress={() => addLista(n)}>
                            <Text style={styles.texto2}> {n} </Text>
                        </Pressable>

                    ))}

                    <Pressable style={styles.botao} onPress={() => verificar()}>
                        <Text style={styles.veri}> Verificar</Text>
                    </Pressable>

                </View>

            </View>

            <Modal transparent={true} visible={modal}>

                <View style={styles.containerModal}>
                    <View style={styles.containerTituloModal}>

                        <Text style={styles.TituloModal}> {tM}</Text>

                    </View>
                    <View style={styles.textoModal}>

                        <View style={styles.containerTexto}>

                            <Text style={styles.texto3}> parabens </Text>
                            <Text style={styles.texto3} > pela </Text>
                            <Text style={styles.texto3}> {tM2} </Text>
                        </View>

                        <Pressable style={styles.botaoModal} onPress={() => reiniciar()}>
                            <Text> opa </Text>
                        </Pressable>

                    </View>
                </View>

            </Modal>

        </View>



    );
}