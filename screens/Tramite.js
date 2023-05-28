import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import DatePicker from 'react-native-datepicker';

const Tramite = ({ navigation }) => {
  const [sucursal, setSucursal] = useState('');
  const [cuenta, setCuenta] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [motivo, setMotivo] = useState('');
  const [tipo, setTipo] = useState('');
  const [atendido, setAtendido] = useState('');

  const sendData = () => {
    axios
      .post(`http://localhost:2000/data/1/0000000000/${fecha}/${hora}/${motivo}/${tipo}/false`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.subtitle}>Selecciona ventanilla o ejecutivo</Text>
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => {setTipo('V')}}>
                <Text style={styles.buttonText}>Ventanilla</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => {setTipo('E')}}>
                <Text style={styles.buttonText}>Ejecutivo</Text>
            </TouchableOpacity>
        </View>
      <Text style={styles.subtitle}>Selecciona el tipo de trámite que deseas realizar</Text>
      <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => {setTipo('Deposito')}}>
                    <Text style={styles.buttonText}>Depósito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {setTipo('Retiro')}}>
                    <Text style={styles.buttonText}>Retiro</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {setTipo('Pago')}}>
                    <Text style={styles.buttonText}>Pago</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {setTipo('Apertura de cuenta')}}>
                    <Text style={styles.buttonText}>Apertura de cuenta</Text>
                </TouchableOpacity>
            </View>
      <Text>Fecha</Text>
      <DatePicker
        style={styles.datePicker}
        date={fecha}
        mode="date"
        placeholder="Selecciona una fecha"
        format="YYYY-MM-DD"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        allowFontScaling={true}
        hideText={false}
        duration={300}
        customStyles={{
          dateInput: styles.dateInput,
          placeholderText: styles.placeholderText,
          dateText: styles.dateText,
        }}
        useNativeDriver={true}
        onDateChange={(date) => setFecha(date)}
      />
        <Text>Hora</Text>
        <DatePicker
        style={styles.datePicker}
        date={hora}
        mode="time"
        placeholder="Selecciona una hora"
        format="HH:mm"
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        allowFontScaling={true}
        hideText={false}
        duration={300}
        customStyles={{
            dateInput: styles.dateInput,
            placeholderText: styles.placeholderText,
            dateText: styles.dateText,
        }}
        useNativeDriver={true}
        onDateChange={(date) => setHora(date)}
        />
        

      <TouchableOpacity style={styles.button} onPress={sendData}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#ffffff',
    },
    subtitle: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    datePicker: {
      width: '100%',
      marginBottom: 10,
    },
    dateIcon: {
      position: 'absolute',
      left: 0,
      top: 4,
      marginLeft: 0,
    },
    dateInput: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 4,
      height: 40,
      alignItems: 'flex-start',
      paddingLeft: 40, // Adjust the left padding to make room for the date icon
    },
    placeholderText: {
      color: '#999',
    },
    dateText: {
      color: '#000',
    },
    button: {
      height: 45,
      backgroundColor: '#5b6670',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      padding: 10,
      margin: 1
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 15,
    },
  });

export default Tramite