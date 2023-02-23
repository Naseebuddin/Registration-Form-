import React, { useState } from "react";

import { StyleSheet, ScrollView,Text, TouchableOpacity, View } from "react-native";
import InputComponents from '../../Components/Input/InputComponents';

export default function Forms() {
    const [textInputName, settextInputName] = useState('');
    const [textInputEmail, setTextInputEmial] = useState('');
    const [age, setAge] = useState('');
    const [number, setNumber] = useState('');



    function checkTextInput() {
        if (!textInputName.trim()) {
            alert('Please Enter Name');
            return;
        }
        if (!textInputEmail.trim()) {
            alert('Please Enter Emial');
            return;
        }
        if (!age.trim()) {
            alert('Please Enter Your age ')
            return
        }
        if (!number.trim()) {
            alert('please Enter Your number');
            return
        }
        

        alert(`Succes `+textInputName);
    };


    return (
    <ScrollView>

        <View style={{ ...styles.ViewStyle }}>
            <Text style={{ ...styles.TextStyle }}>
               
                Registration Form
            </Text>

            <View style={{borderWidth:1,height:60,flexDirection:'row',backgroundColor:'rgb(240,248,255)',borderRadius:8,margin:10}}>        
                    <InputComponents
                place="Enter your name "
                onChangeText={(value) => settextInputName(value)}
                // ChangeBackgroundColor={'rgb(240,248,255)'}
                MaxLegth={12}
            />
            <Text style={{...styles.starTextStyle}}>*</Text>

</View>



<View style={{borderWidth:1,height:60,flexDirection:'row',backgroundColor:'rgb(240,248,255)',borderRadius:8,margin:10}}>
            <InputComponents
                place="Age"
                onChangeText={(value)  => setAge(value)}
                ChangeBackgroundColor={'rgb(240,248,255)'}
                ChangeTheKeyBoard={"number-pad"}
                MaxLegth={3}

            />
               <Text style={{...styles.starTextStyle}}>*</Text>

</View>

<View style={{borderWidth:1,height:60,flexDirection:'row',backgroundColor:'rgb(240,248,255)',borderRadius:8,margin:10}}>

            <InputComponents
                place="Enter Roll No"
                ChangeBackgroundColor={'rgb(240,248,255)'}
                MaxLegth={9}
            />
               <Text style={{...styles.starTextStyle}}> </Text>

</View>

<View style={{borderWidth:1,height:60,flexDirection:'row',backgroundColor:'rgb(240,248,255)',borderRadius:8,margin:10}}>

            <InputComponents
                place="Home Address"
                ChangeBackgroundColor={'rgb(240,248,255)'}
                MaxLegth={20}
            />
                         <Text style={{...styles.starTextStyle}}> </Text>

</View>
<View style={{borderWidth:1,height:60,flexDirection:'row',backgroundColor:'rgb(240,248,255)',borderRadius:8,margin:10}}>

            <InputComponents
            ChangeTheKeyBoard={"email-address"}
                place="Email "
                onChangeText={(value) => setTextInputEmial(value)}
                ChangeBackgroundColor={'rgb(240,248,255)'}
                MaxLegth={20}
            />
                         <Text style={{...styles.starTextStyle}}>*</Text>

</View>
<View style={{borderWidth:1,height:60,flexDirection:'row',backgroundColor:'rgb(240,248,255)',borderRadius:8,margin:10}}>

            <InputComponents 
            place="Phone number"
            onChangeText={(value)=> setNumber(value)}
             ChangeBackgroundColor={'rgb(240,248,255)'} 
             ChangeTheKeyBoard={"number-pad"}
             MaxLegth={10}
              />
                               <Text style={{color:'red',fontSize:26,alignSelf:'center',margin:10}}>*</Text>

</View>
            <TouchableOpacity style={{ ...styles.ButtonStyle }}>
                <Text onPress={checkTextInput}>
                    SUBMIT
                </Text>
            </TouchableOpacity>
           




        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

    ViewStyle: {
        flex: 1,
        margin: 25,
        alignItems: 'center'
    },
    TextStyle: {
        padding: 10,
        fontSize: 26,
        fontWeight: 'bold'
    },
    ButtonStyle: {
        marginTop: 50,
        borderWidth: 1,
        borderRadius: 8,
        height: 40,
        justifyContent: 'center',
        width: 120,
        alignItems: 'center',
        backgroundColor: 'rgb(244,164,96)'

    },
    starTextStyle:{
        color:'red',
        fontSize:26,
        alignSelf:'center',
        margin:10

    }


})