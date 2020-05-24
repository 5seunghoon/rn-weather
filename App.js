import React, {useState, useEffect} from 'react';
import Loading from './Loading';
import AppMain from './AppMain';
import * as Location from 'expo-location';

export default function App() {
    const [appState, setAppState] = useState({
        isLoading: true,
        lat: 0,
        lng: 0
    });

    async function getLocation() {
        const request = await Location.requestPermissionsAsync();
        if (!request.granted) {
            console.log("error for get permission");
            return null;
        }
        return await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High
        });
    }

    useEffect(() => {
        if (appState.isLoading) {
            getLocation().then(r => {
                console.log(r?.coords.longitude, r?.coords.latitude);
                setAppState({
                    isLoading: false,
                    lat: r?.coords.longitude,
                    lng: r?.coords.latitude,
                });
            });
        }
    });

    return <Loading params={appState}/>;
}
