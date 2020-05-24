import React, {useEffect, useState} from 'react';
import Loading from './Loading';
import Weather from './Weather';
import {API_KEY} from './ApiKey';
import * as Location from 'expo-location';
import axios from "axios";

function getCurrentWeatherUrl(lat, lng) {
    return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
}

export default function App() {
    const [appState, setAppState] = useState({
        isLoading: true,
        temp: 0
    });

    const getWeather = async () => {
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
        const {data} = await axios.get(url);
        console.log("print data");
        console.log(data);
        setAppState({
            isLoading: false,
            temp: data.main.temp
        })
    };

    useEffect(() => {
        if (appState.isLoading) {
            getWeather()
        }
    });

    return appState.isLoading ? <Loading/> : <Weather temp={Math.round(appState.temp)}/>;
}
