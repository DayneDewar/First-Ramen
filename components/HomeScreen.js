import React, { useState, useEffect, useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Header from './Header';
import { stores } from './RamenSpots'

function HomeScreen() {
 
    return (
      <View style={styles.container}>
        <Header />
        <FlatList 
          data={stores} 
          renderItem={({item}) => {
            <Text style={styles.item}>{item.name}</Text>
        }}
        />
        <StatusBar style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#888',
      fontSize: 18,
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});

export default HomeScreen;