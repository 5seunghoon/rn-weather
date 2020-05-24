import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading({params}) {
    const str = () => {
        return params.isLoading ? "Getting the weather" : (params.lat + ", " + params.lng);
    };

    console.log(params);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{str()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingStart: 30,
        paddingBottom: 100,
        backgroundColor: "#97f2f2"
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30
    }
});