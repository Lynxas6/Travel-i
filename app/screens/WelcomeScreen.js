import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Alert} from 'react-native';
import { Button, Card } from 'react-native-paper';



function WelcomeScreen({navigation}) {

  return (
        
  
    <ImageBackground 
      style={styles.backroundImage}
      source={require('../assets/backroundView.jpg')}
    >

      <View style={styles.logoContainer}>
          
        <Text style={styles.titleText}>
          Traveli
        </Text>

        <Image 
          style={styles.logoImage}
          source={require('../assets/travelPlane.png')}
          blurRadius={2}
        />

        <Text style={styles.welcomeText}>
          Your Own Travel Application
        </Text>

      </View>

      
      <View styles={styles.loginButton}>        
        <Button 
          onPress={() => navigation.navigate("Login")}
          mode='contained' 
          color='white' 
          style={{bottom:40}} 
          labelStyle={styles.loginButton}> 
          Login
        </Button>
      </View>

      <View styles={styles.registerButton}>
        <Button 
          onPress={() => navigation.navigate("Register")}
          mode='text' 
          labelStyle={styles.registerButton} 
          color='white' style={{bottom:35}}> 
          Register
        </Button>        
      </View>      

    </ImageBackground> 
  );
}

const styles = StyleSheet.create({

    backroundImage: {
      flex: 1,
      justifyContent:"flex-end",
      alignItems:"center"
    },
  
    logoImage: {
      
      width: 165,
      height: 165,
      resizeMode: 'contain',
      opacity: 0.90,
      
  
    },
  
    logoContainer: {
      position:'absolute',
      top: 50,
      justifyContent:"center",
      alignItems:"center"
    },
  
    welcomeText: {
      color:'white',
      fontSize: 30,
      fontWeight:'bold',
      textAlign:'center',
      textShadowRadius: 13,
      textShadowOffset: {width: 4, height: 4 },
      opacity: 0.9
    },
  
    titleText: {
      color:'white',
      fontSize: 60,
      fontWeight:'bold',
      textAlign:'center',
      textShadowRadius: 15,
      textShadowOffset: {width: 4, height: 4 },
      opacity: 0.8,
      letterSpacing: 5,
      fontStyle:'italic',
      textShadowColor:'lightgray'
      
    },
  
    loginButton: {
      color:'blue',
      fontSize:17,
      //fontWeight:'bold'
      //backgroundColor:"lightblue",
    },
  
    registerButton: {
      fontSize:14,
      fontWeight:'bold'
    }
  
  
  });

export default WelcomeScreen;