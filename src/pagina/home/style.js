import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323232',
  },

  Campo: {
    flex: 1,
    backgroundColor: '#404040ff',
  },


  containerTitulo: {
    alignItems: 'center',
    height: 60,
    flexDirection: 'row'

  },

  numero: {
    flex: .7,
    alignItems: 'center',

  },


  Titulo: {
    padding: 5,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },

  flat: {
    flexDirection: 'row',
  },

  containeNumero: {
    margin: 5,
    height: 53,
    width: 53,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },

  texto: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'Mitr',
    fontWeight: 'bold'
  },

  containerInput: {
    flex: .4,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },


  input: {
    margin: 5,
    height: 60,
    width: 70,
    backgroundColor: 'rgba(0,0,0,.4)',
    borderWidth: 1,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },

  texto2: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold'
  },

  botao: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222',
    borderWidth: 1,
    borderRadius: 5
  },

  veri: {
    color: 'white',
    fontWeight: 'bold',

  },


  // modal 

  containerModal: {
    flex: 1,
    backgroundColor: '#404040ff',
  },

  containerTituloModal: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',


  },

  TituloModal: {
    fontSize: 60,
    color: 'white'
  },

  containerTexto: {
    padding: 20,
    textAlign: 'center'
  },

  textoModal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },


  texto3: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },

  botaoModal: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,.4)',
  },

  veri2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },

});
