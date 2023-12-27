import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/Components/Utility/Logo';
import CustomButton from '@/Components/Utility/CustomButton';
import Colors from '@/constants/Colors';
import { router } from 'expo-router';
import React from 'react'

const CustomHeader = () => {
    return (
        <SafeAreaView edges={['right', 'top', 'left']} >
            <View style={styles.container}>
                <Logo />

                <View style={styles.buttonContainer}>
                    <CustomButton onPress={() => router.push("/login")} size="defaultSize" coloring="inverseColoring">Log in</CustomButton>
                    <CustomButton onPress={() => router.push("/signup")} size="defaultSize" coloring="defaultColoring">Sign up</CustomButton>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: Colors.colorWhite,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: Colors.colorWhiteTwo,
        borderBottomStyle: 'solid',
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
})

export default CustomHeader