import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
    
    },

    Campo: {
      flex: 1,
      
    },

    tela:{
      flex: 1,
      borderWidth: 1
    },

    numero:{
      flex: 1,
      borderWidth:1,
      alignItems: 'center',
      justifyContent: 'center'
    },

    containerBlocos:{
      width: 250,
      height: 300,
      borderWidth: 1,
     
    },

    flat:{
      flexDirection: 'row'
    },

    containeNumero:{
      margin: 5,
      padding: 10 ,
      backgroundColor: 'black',
      color: 'white',
    },

    containerInput:{
        flex: 0.2,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row'
    },


    input:{
      height: 50,
      width: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      fontSize: 30,
    },

    teclado:{
      flex: 0.5,
      borderWidth: 1
    },

    botao:{
      flex: 1,
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: 'blue',
    },

    veri: {
      color: 'white',
      fontSize: 60,
    }

  });
  