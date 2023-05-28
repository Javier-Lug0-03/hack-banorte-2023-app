import {ScrollView, FlatList, View} from 'react-native';
import {React, useState, useEffect} from 'react';
import { Axios } from 'axios';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const Nearby =  () =>{
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () =>{
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = "Esperando...";
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = `Lat: ${location.coords.latitude} - Lon: ${location.coords.longitude}`;
    }

    return(
        <View>
            <MapView style={{height: '100%', width: '100%'}} 
            initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            }}
            />
        </View>
    )
}

export default Nearby;