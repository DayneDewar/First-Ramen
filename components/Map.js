import React, { useState, useEffect, useCallback } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Animated, StyleSheet, Dimensions, TextInput, ScrollView, Platform, TouchableOpacity, Text, Image, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { stores } from './RamenSpots'
import icon from '../assets/icon.png';
// import { useCallback, useEffect, useState } from 'react/cjs/react.production.min';

function Map() {

    // const [stores, setStores] = useState([]);

    // const handleStoreFetch = useCallback(async () => {
    //     const result = await fetch('http://127.0.0.1:3000/stores');
    //     const data = await result.json();
    //     if (result.ok) {
    //         setStores(data)
    //     }
    // })
    // useEffect(() => {
    //     handleStoreFetch();
    // },[])

    // fetch('http://192.168.1.36:3000/stores')
    // .then(r=> r.json())
    // .then(data => setStores(data))
    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0)

    // useEffect(() => {
    //     mapAnimation.addListener(({ value }) => {
    //         let index = Math.floor(value / )
    //         if (index > stores.length) {
    //             index = stores.length - 1
    //         }
    //         if (index < 0 ) {
    //             index = 0
    //         }

    //         const regionTimeout = setTimeout(() => {
    //             if(mapIndex !== index) {
    //                 mapIndex = index
    //                 const {coordinate} = 
    //             }
    //         })
    //     })
    // })
    const markers = stores.map((store) => {
        const coords = {
            latitude: store.lat,
            longitude: store.long
        }

        return(
            <MapView.Marker key={store.id} coordinate={coords} title={store.name}>
                {/* <Animated.View style={styles.markerWrapper}>
                    <Animated.Image style={styles.markers} resizeMode="cover" />
                </Animated.View> */}
            </MapView.Marker>
        )
    })

    const cardMarkers = stores.map((store) => {
        return (
            <View style={styles.card} key={store.id}>
                <Image
                    source={{uri : store.image}}
                    style={styles.cardImage}
                    resizeMode='cover'
                />
                <View style={styles.textContent}>
                    <Text numberOfLines={1} style={styles.cardtitle}>{store.name}</Text>
                    <Text numberOfLines={1} style={styles.cardDescription}>{store.address}</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL(store.website)}
                            style={[styles.signIn, {
                                borderColor: '#FF6347',
                                borderWidth: 1
                            }]}
                        >
                            <Text style={[styles.textSign, {
                                color: '#FF6347'
                            }]}>Order From Website</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    })
    return (
        <View styles={styles.container}>
            <MapView 
            style={styles.map}
            initialRegion={{
                latitude: 40.7412199,
                longitude: -73.9665138,
                latitudeDelta: 0.09,
                longitudeDelta: 0.07,
            }}>
                {markers}
            </MapView>
            <View style={styles.searchBox}>
                <TextInput 
                placeholder="Search Here"
                placeholderTextColor="#000"
                autoCapitalize="none"
                style={{flex:1, padding:0}}
                />
                <Ionicons name="ios-search" size={20}/>
            </View>
            <ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                height={50}
                style={styles.chipStyle}
            >
                <TouchableOpacity style={styles.chipsItem}>
                    <Text> Ramen </Text>
                </TouchableOpacity> 
            </ScrollView>
            <Animated.ScrollView
                horizontal
                scrollEventThrottle={1}
                showsHorizontalScrollIndicator={false}
                style={styles.scrollView}
                pagingEnabled
                snapToInterval={100}
                snapToAlignment='center'
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation
                                }
                            },
                        },
                    ],
                    {useNativeDriver: true}
                )}
            >
                {cardMarkers}
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height
        height: '100%'
    },
    markerWrapper: {
        alignItems: "center",
        justifyContent: "center",
        width:50,
        height:50,
    },
    markers: {
        width: 30,
        height: 30,
    },
    searchBox: {
        position:'absolute', 
        marginTop: Platform.OS === 'ios' ? 40 : 20, 
        flexDirection:"row",
        backgroundColor: '#fff',
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    chipStyle: {
        position: 'absolute',
        top:Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal: 10
    },
    chipsItem: {
        flexDirection:"row",
        backgroundColor:'#fff', 
        borderRadius:20,
        padding:8,
        paddingHorizontal:20, 
        marginHorizontal:10,
        height:35,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    card: {
        // padding: 10,
        elevation: 2,
        backgroundColor: "#FFF",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginHorizontal: 10,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: 220,
        width: 300,
        overflow: "hidden",
      },
      cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
      },
      textContent: {
        flex: 2,
        padding: 10,
      },
      cardtitle: {
        fontSize: 12,
        // marginTop: 5,
        fontWeight: "bold",
      },
      cardDescription: {
        fontSize: 12,
        color: "#444",
      },
      button: {
        alignItems: 'center',
        marginTop: 5
      },
      signIn: {
          width: '100%',
          padding:5,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 3
      },
      textSign: {
        fontSize: 14,
        fontWeight: 'bold'
    }
})
export default Map;