import React from "react";
import { SafeAreaView, ScrollView, View,ImageBackground } from "react-native";
import {Appbar, TextInput, Button, DefaultTheme } from "react-native-paper";


export function RegisterScreen ({navigation}) {


    const [eyeState,setEyeState] = React.useState(true);
    const [eyeStateC,setEyeStateC]=React.useState(true);

    const onPressEye=() => setEyeState(!eyeState);
    const onPressEyeC=() => setEyeStateC(!eyeStateC);

    return (

        <ImageBackground 
            style={{flex:1}}
            source={require('../assets/backroundView.jpg')}
            blurRadius={2}
            
        >
            <SafeAreaView style={{top:40}}>
                <ScrollView >
                    <Appbar>
                        <Appbar.BackAction onPress={() => navigation.navigate("Welcome")}/>
                        <Appbar.Content title="Register"/>
                    </Appbar>

                    <View style={{padding:15, paddingTop:0}}>
                        <TextInput label="Username"/>
                        <TextInput label="Password" secureTextEntry={eyeState} right={<TextInput.Icon onPress={onPressEye} name="eye-off-outline" color={DefaultTheme.colors.primary}/> } />
                        <TextInput label="Confirm Password" secureTextEntry={eyeStateC} right={<TextInput.Icon onPress={onPressEyeC} name="eye-off-outline" color={DefaultTheme.colors.primary}/>}/>
                        <TextInput label="Email" keyboardType="email-address" />
                        <Button mode='contained'style={{marginTop:7}}>Register</Button>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
}

export default RegisterScreen;