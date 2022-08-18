import React from 'react';
import { SafeAreaView, View, StyleSheet, ImageBackground } from 'react-native';
import {Card, TextInput, Button, DefaultTheme} from 'react-native-paper';


export function  LoginScreen ({navigation}) {
    
    const [onChangeText] = React.useState(null);

    return(

        <ImageBackground 
            style={styles.backroundImage}
            source={require('../assets/backroundView.jpg')}
            blurRadius={2}
        >

            <SafeAreaView style={styles.cardView}>
                    <View style={{width:'100%'}} >
                        <Card>

                            <Card.Title title="Login with an existing account" titleStyle={{color: DefaultTheme.colors.primary, opacity:0.75}} style={{backgroundColor:'transparent'}}></Card.Title>
                            <Card.Content>
                                <TextInput 
                                    placeholder='Email' 
                                    keyboardType='email-address'
                                    onChangeText={onChangeText}
                                />
                                <TextInput label='Password' secureTextEntry={true}></TextInput>
                                <Button uppercase={false} style={styles.buttonStyle}> Forgot email/password </Button>
                                <Button 
                                    onPress={() => navigation.navigate("DestinationSearch")}
                                    mode='contained' 
                                    style={styles.buttonStyle}>Login
                                </Button>
                            </Card.Content>

                            <Card.Actions style={{marginTop:4, justifyContent:'flex-end'}}>
                                <Button 
                                    onPress={() => navigation.navigate("Welcome")} 
                                    uppercase={false} 
                                    labelStyle={{fontSize:13}}>Back to Homepage
                                </Button>
                            </Card.Actions>
                        </Card>

                    </View>

            </SafeAreaView>
        </ImageBackground>
    );


    
}

const styles = StyleSheet.create({

    cardView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        opacity:0.85
    },

    backroundImage: {
        flex: 1,
        justifyContent:"flex-end",
        alignItems:"center",
        
    },

    buttonStyle:{
        margin:3,
        marginLeft:0,
        marginRight:0
    }


})