import { StatusBar } from 'expo-status-bar';
import { View, Text , TextInput, Pressable ,FlatList } from 'react-native-web';
import styles from './style';
import { useEffect, useState } from 'react';

export default function App() {



    const [num,setNum] = useState([0,0,0,0]);
    const [Lista,setLista] = useState([]);  
   // const numero = [0,0,0,0]

    const addArray =(num) => {


        const novoItem = {
            valor: num
        }
            
        const updateAray = [...Lista,novoItem];
        setLista(updateAray);

        setNum('');
    }


  return (
    <View style={styles.container}>
        <View style={styles.Campo}> 
            <View style={styles.tela}>
                <View style={styles.numero}>

                    <View style={styles.containerBlocos}>

                    <FlatList 
                    data={Lista}
                    keyExtractor={(item) => item.valor}
                    contentContainerStyle={{padding: 20}}
                    renderItem={({item}) => (

                        <View style={styles.flat}>
                            <Text style={styles.containeNumero} >  {item.valor} </Text>
                            <Text style={styles.containeNumero} >  {item.valor} </Text>
                            <Text style={styles.containeNumero} >  {item.valor} </Text>
                            <Text style={styles.containeNumero} >  {item.valor} </Text>
                        </View>
                              
                    )}  
                    />
                    
                    </View>
     {num}
                </View>

                <View style={styles.containerInput}>

                        <TextInput
                        style={styles.input}
                        
                        onChangeText={setNum}
                        /> 
                        <TextInput
                        style={styles.input}
                        
                        onChangeText={setNum}
                        /> 
                        <TextInput
                        style={styles.input}
                        
                        onChangeText={setNum}
                        /> 
                        <TextInput
                        style={styles.input}
                        
                        onChangeText={setNum}
                        /> 

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