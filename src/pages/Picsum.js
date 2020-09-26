import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

import { useStore } from "../store";
import { removeTodo } from "../actions";


const Picsum = () => {
const [{ todos }, dispatch] = useStore();
const [imageItems, setImageItems] = useState([]);

const shuffle = (array) => {
   return array.sort(() => Math.random() - 0.5);
}
  
useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=10').then((response)=>{
        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
    
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            setImageItems(shuffle(data))
          });
    })
}, [])
    return (
        <View style={styles.container}>
          <Text>Picsum test</Text>
          
        <View>
            {imageItems.map((val, index) => (
            <View key={index}><Text>{val.author}</Text>
            <Image source={{uri: `https://picsum.photos/200/300?image=${val.id}`}}
                style={{width: 200, height: 300}} />
            </View>))}
        </View>
          {todos.map((val, index) => (
            <View key={index}><Text>{val.name}</Text>
                <TouchableHighlight onPress = {() => { dispatch(removeTodo(val)) } }>
                    <Text>remove</Text>
                </TouchableHighlight>
            </View>))}
          <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Picsum
