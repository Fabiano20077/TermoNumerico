import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#323232',
         paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    },

    containerInicio: {
        flex: 1,
    },

    containerTitulo: {
        flex: .5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    titulo: {
        padding: 5,
        fontSize: 60,
        color: 'white',
        fontWeight: 'bold'
    },

    opcoes: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'

    },

    Texto: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
      
    }

});
