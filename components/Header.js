import React from 'react';
import { Image, StyleSheet } from 'react-native';
import icon from '../assets/icon.png'

function Header() {

    return (
        <Image source={icon} style={styles.header} />
    )
}
const styles = StyleSheet.create({
    header: {
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        top: 50,
        position: 'absolute',
        flexDirection: 'row',
        flex: 1,
    }
})
export default Header;