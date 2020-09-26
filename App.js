import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StoreProvider } from "./src/store";
import reducers from "./src/reducers"
import initialState from "./src/store/initialState"

import Picsum from "./src/pages/Picsum"

export default function App() {
  return (
    <StoreProvider initialState={initialState} reducer={reducers}>
      <Picsum />
    </StoreProvider>
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
