// Header.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

const Header = () => {
    return (
        <View style={styles.header}>
            <Link href="/" style={styles.linkText}>Home</Link>
            <Link href="/sobre" style={styles.linkText}>Sobre</Link>
            <Link href="/listagem" style={styles.linkText}>Listagem</Link>
            <Link href="/login" style={styles.linkText}>Login</Link>
            <Link href="/cadastro" style={styles.linkText}>Cadastro</Link>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: 500,
        paddingVertical: 10,
        backgroundColor: '#61dafb', 
        borderBottomWidth: 2,
        borderBottomColor: '#20232a',
        alignSelf: 'center', 
    },
    linkText: {
        color: '#20232a', 
        textDecorationLine: 'none',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Header;
