import React from "react";
import PropTypes from "prop-types";
import {View, Text, StyleSheet} from "react-native";

export default function Weather({temp}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>온도 : {temp}</Text>
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#909090"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 30
    }
});