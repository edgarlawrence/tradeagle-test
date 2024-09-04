import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import ImageHome from '../../assets/Group.png'
import LogoHome from '../../assets/Mask.png'
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({ navigation }) {
    return (
        <LinearGradient
            colors={['#000314', '#001329', '#0F2F4F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1.5 }}
            style={style.container}
        >
            <View style={flexStyle(1)} />
            <View style={flexStyle(0.8)}>
                <Image source={ImageHome} />
            </View>
            <View style={flexStyle(0.5)}>
                <Image source={LogoHome} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 80, flexDirection: 'column', paddingTop: 30 }}>
                <Text style={{ color: "white", fontSize: 18, textAlign: 'center' }}>
                    Attendance & Salary Ledger
                    Management System for
                    Employees
                </Text>
            </View>
            <View style={{ flex: 0.8, flexDirection: 'column', justifyContent: 'space-between' }}>
                <TouchableOpacity style={{ backgroundColor: '#3C50E0', flexDirection: 'column', justifyContent: 'center', width: 310, height: 44, borderRadius: 20 }} onPress={() => navigation.navigate('Register')}>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}> Register </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: '#fff', flexDirection: 'column', justifyContent: 'center', width: 310, height: 44, borderRadius: 20 }}>
                    <Text style={{ color: 'black', textAlign: 'center', fontSize: 16 }}> Sign In </Text>
                </TouchableOpacity>
            </View>
            <View style={flexStyle(3)} />
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})

const flexStyle = (flex, color) => ({
    flex: flex,
    backgroundColor: color
})