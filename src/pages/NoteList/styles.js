import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants'

const primaryColor = '#04d361';
const branco = '#fff';
const card = '#151317e3'

const { width } = Dimensions.get('window');

const numberGrid = 3;

const itemWidth = (width - 42) / numberGrid;

export default StyleSheet.create({

    image: {
        flex: 1,
        resizeMode: "cover",
    },

    container: {
        flex: 1,
        backgroundColor: 'black'
    },

    header: {
        height: '10%',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: branco,
        paddingTop: Constants.statusBarHeight + 5,
    },

    headerText: {
        color: primaryColor,
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: "center",
        width: '70%',
    },

    buttonVoltar: {
        justifyContent: "center",
        alignItems: 'center',
        height: 35,
        width: '15%',
    },

    buttonVoltarText: {
        color: primaryColor,
        fontSize: 24,
        fontWeight: 'bold',
        transform: [
            { rotate: "90deg" }
        ],
    },

    section: {
        paddingHorizontal: 8,
        height: '90%',
        marginTop: 16,
    },

    cardContainer: {
        width: itemWidth,
        height: itemWidth,
        backgroundColor: card,
        borderWidth: 1,
        padding: 8,
        margin: 4,
    },

    cardTitle: {
        color: branco,
        fontSize: 12,
    },

    cardText: {
        color: '#999',
    },

    footer: {
        flexDirection: 'row-reverse',
        top: -100,
        right: 40,
    },

    button: {
        backgroundColor: primaryColor,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50,
        height: 60,
        width: 60,
    },

    buttonText: {
        color: branco,
        fontSize: 24,
    },

});