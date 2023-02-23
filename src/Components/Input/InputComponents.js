import  React  from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { useState } from "react";


export default function InuptComponents({
    place,
    ChangeBackgroundColor,
    ChangeTheKeyBoard,
    onChangeText,
    MaxLegth
}) {
    

    MaxLegth:'';
    place: '';
    ChangeBackgroundColor: '';

    return (
        <View style={{}}>
            <TextInput placeholder={place} 
            maxLength={MaxLegth}
        
          onChangeText={onChangeText}
            style={{ ...styles.InputStyle, }}
                backgroundColor={ChangeBackgroundColor} keyboardType={ChangeTheKeyBoard} />
        </View>

    )
}


const styles = StyleSheet.create({

    InputStyle: {
        height: 50,
        // borderWidth: 1,
        borderRadius: 8,
        width: 320,
        padding: 10,
        // backgroundColor: '(192,192,192)',
        // marginTop: 16

    }
})