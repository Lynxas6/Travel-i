import React, {useState} from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions,Image, FlatList } from 'react-native';
import { GooglePlacesAutocomplete, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { Button } from 'react-native-paper';


export function DestinationSearchScreen({navigation}) {

  const [selectedPlace,setSelectedPlace] = useState(['initialState']);
 


  

  return (

    <View style={{flex:1, paddingTop:50, backgroundColor:'lightblue'}}>

      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setSelectedPlace (details.photos.map(x => ({photo: x.photo_reference})))
          console.log(selectedPlace);

        }}
        query={{
          key: 'AIzaSyCvJooMGWchZzSpwOU3isxhZpclnpzYKss',
          language: 'en',
          type: '(cities)'
        }}

        


      />

      <View style={styles.container}>
        <FlatList
          refreshing
          data={selectedPlace}
          renderItem={({item}) => (
            <Image style={{width:360,
              height:250,
              resizeMode:'cover',
              margin:8,
              top:50
              }} 
              source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+ item.photo +'&key=AIzaSyCvJooMGWchZzSpwOU3isxhZpclnpzYKss'}} />
          )}
          //keyExtractor={item => item}
          horizontal
        />    
      </View>
      {/*<View style={styles.container}>
        <Image style={{width:'100%',height:'100%', resizeMode:'contain', position:'absolute'}} source={{uri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+ selectedPlace[0].photo +'&key=AIzaSyCvJooMGWchZzSpwOU3isxhZpclnpzYKss'}} />
      </View>*/}

      <Button 
        onPress={() => navigation.navigate("ResultsMap")}
        mode='contained' 
        style={styles.buttonStyle}>Next
      </Button> 
    </View>



    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: '100%',
  },

  autocompleteStyle:{
    flex: 1,

  },

  buttonStyle:{
    margin:3,
    marginLeft:0,
    marginRight:0
  },
  
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});