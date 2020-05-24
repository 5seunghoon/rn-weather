import React, {useEffect, useState} from 'react';
import Loading from './Loading';
import {API_KEY} from './ApiKey';
import * as Location from 'expo-location';
import axios from "axios";

function getCurrentWeatherUrl(lat, lng) {
    return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
}

export default function App() {
    const [appState, setAppState] = useState({
        isLoading: true,
        lat: 0,
        lng: 0
    });

    async function getWeather() {
        const request = await Location.requestPermissionsAsync();
        if (!request.granted) {
            console.log("error for get permission");
            return null;
        }
        const {
            coords: {latitude, longitude}
        } = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.High
        });

        const url = getCurrentWeatherUrl(latitude, longitude);
        console.log("url " + url);
        const {data} = await axios.get(url);
        console.log(data);

        return data;
    }

    useEffect(() => {
        if (appState.isLoading) {
            const c = getWeather();
            console.log(c);
            setAppState({
                isLoading: false,
                weather: c
            });
        }
    });

    return <Loading params={appState}/>;
}
