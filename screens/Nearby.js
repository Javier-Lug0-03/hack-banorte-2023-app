import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

const Nearby = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      try {
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        setIsLoading(false);
      } catch (error) {
        setErrorMsg('Error getting location');
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Obteniendo ubicación...</Text>
      </View>
    );
  }

  if (errorMsg) {
    alert(errorMsg);
  }

  return (
    <View style={{ flex: 1 }}>
      {location && (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: location.coords.latitude || 0,
            longitude: location.coords.longitude || 0,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude || 0,
              longitude: location.coords.longitude || 0,
            }}
            title="Mi ubicación"
            description="Estoy aquí"
            onCalloutPress={() => alert('Stop it')}
          />
          <Marker
            coordinate={{
              latitude: 25.64237354169928,
              longitude: -100.32163087375795,
            }}
            title="Banorte"
            description="Sucursal más cercana"
          >
            <Callout onPress={() => {navigation.navigate('Turno')}}>
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text>Banorte Siqueiros</Text>
                <Text>El más cercano</Text>
                <TouchableOpacity
                  style={{ backgroundColor: '#EB0029', padding: 5, margin: 2 }}
                  onPress={() => {navigation.navigate('Turno')}}
                >
                  <Text style={{ color: '#ffffff' }}>Solicitar turno</Text>
                </TouchableOpacity>
              </View>
            </Callout>
          </Marker>
        </MapView>
      )}
    </View>
  );
};

export default Nearby;
