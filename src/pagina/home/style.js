import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',

  },

  Campo: {
    flex: 1,
    backgroundColor: '#5da051ff',
  },

  tela: {
    flex: 1,
    borderWidth: 1
  },

  numero: {
    flex: 1,
    borderWidth: 1,
    alignItems: 'center',

  },

  Titulo: {
    padding: 5,
    fontSize: 30,
    color: 'white'
  },

  flat: {
    flexDirection: 'row'
  },

  containeNumero: {
    margin: 5,
    height: 70,
    width: 70,
    backgroundColor: 'rgba(0,0,0,.8)',
    alignItems: 'center',
    justifyContent: 'center',

  },

  texto: {
    
    color: 'white',
    fontSize: 40
  },

  containerInput: {
    flex: 0.2,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },


  input: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 30,
  },

  teclado: {
    flex: 0.1,
    borderWidth: 1
  },

  botao: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },

  veri: {
    color: 'white',
    fontSize: 60,
  }

});
