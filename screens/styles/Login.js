import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: '#EB0029',
    },
    subcontainer:{
        flex: 1,
        padding:10,
        backgroundColor: '#EB0029',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        height: 45,
        backgroundColor: '#5b6670',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    buttonText:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Gotham'
    },
    buttonRegister:{
        width: '100%',
        height: 40,
        backgroundColor: '#f4511e',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonRegisterText:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Gotham'
    },
    input:{
        width: '100%',
        height: 50,
        backgroundColor: '#f6f6f6',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomColor: '#000000',
        borderBottomWidth: 1
    },
    inputText:{
        color: 'white',
        fontSize: 15,
        fontFamily: 'Gotham'
    },
    logo:{
        width: 300,
        height: 200,
        borderRadius: 100,
        resizeMode: 'contain',
    },
    logoContainer:{
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    title:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Gotham'
    },
    card:{
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding: 10,
    },
    cardTitle:{
        color: '#000000',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Gotham',
        alignSelf: 'flex-start'
    },
    cardText:{
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Roboto',
        alignSelf: 'center'
    },
    boldtext:{
        color: '#000000',
        fontSize: 14,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    label:{
        color: '#5B6670',
        fontSize: 12,
        fontFamily: 'Gotham',
        alignSelf: 'flex-start'
    }
})

export {styles};