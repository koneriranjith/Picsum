import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { useStore } from "../store";
import { removeTodo } from "../actions";


const Picsum = () => {
const [{ todos }, dispatch] = useStore();

    return (
        <View style={styles.container}>
          <Text>Picsum test</Text>
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
