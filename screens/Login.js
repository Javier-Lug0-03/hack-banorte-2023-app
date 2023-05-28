import {ScrollView, KeyboardAvoidingView,Text, StatusBar,Image, View, TextInput,TouchableOpacity} from 'react-native';
import {styles} from './styles/Login'

const LoginScreen = ({navigation}) =>{
    return(
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <KeyboardAvoidingView style={styles.subcontainer}>
                <Image style={styles.logo} source={require('../assets/images/Logo-Banorte.png')}/>
                <Text style={styles.title}>Bienvenido a Banorte Móvil</Text>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>¿Eres cliente Banorte?</Text>
                    <Text style={styles.cardText}>Ingresa tu número de tarjeta o cuenta <Text style={styles.boldtext}>para activar Banorte Móvil</Text></Text>
                    <TextInput style={[styles.inputText, styles.input]} placeholder="Cuenta o tarjeta" placeholderTextColor="#000000"/>
                    <Text styles={styles.label}>10 digitos cuenta</Text>
                    <Text>16 digitos tarjeta</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Continuar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>¿Aún no eres cliente?</Text>
                    <Text style={styles.cardText}>Abre tu cuenta en línea <Text style={styles.boldtext}>en menos de 10 minutos</Text></Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Abre tu primera cuenta</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Solicita tu turno ahora</Text>
                    <Text style={styles.cardText}>¿Cansad@ de las filas? ¡Ahorra tiempo tramitando tu turno ahora!</Text>
                    <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Ubícanos')}}>
                        <Text style={styles.buttonText}>Solicita tu turno</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default LoginScreen