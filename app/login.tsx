import { View, StyleSheet, ScrollView } from 'react-native';
import Logo from '@/Components/Utility/Logo';
import CustomButton from '@/Components/Utility/CustomButton';
import MainInput from '@/Components/Inputs/MainInput';
import PasswordInput from '@/Components/Inputs/PasswordInput';
import Colors from '@/constants/Colors';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import { AppText } from '@/Components/Utility/AppText';


const Login: React.FC = (): React.ReactElement => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const googleLoginPress = () => {
        console.log('====================================');
        console.log('Google login button clicked');
        console.log('====================================');
    };

    const handlePress = () => {
        console.log('====================================');
        console.log('button clicked');
        console.log('====================================');
    };

    const isEmailValid = (email: string) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password: string) => {
        const passwordRegex = /^.{8,}$/; // A total of at least 8 characters
        return passwordRegex.test(password);
    };

    const isDisabled = !email || !password || !isEmailValid(email) || !isPasswordValid(password);

    return (
        <View style={styles.fullFlex}>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.mainContainer}>
                        <View style={styles.mainContent}>
                            <Logo clickable={false}/>
                            <View style={styles.textsCotainer}>
                                <AppText style={styles.normalTitle}>Welcome back</AppText>
                                <AppText style={styles.normalText}>Ready to reconnect with friends? Login to resume discovery of  new experiences together.</AppText>
                            </View>
                            <CustomButton onPress={googleLoginPress} size="fullWidthSize" coloring="googleColoring" showGoogleSVG>Login with Google</CustomButton>
                            <View style={styles.orCotainer}>
                                <View style={styles.orLine}></View>
                                <AppText style={styles.orText}>or</AppText>
                                <View style={styles.orLine}></View>
                            </View>
                            <View style={styles.authFormItems}>
                                <MainInput placeholder="Enter email address" keyboardType="email-address" label="Email address" value={email} setValue={setEmail} autoComplete="email" autoCapitalize="none" />
                                <PasswordInput placeholder="Enter password" label="Password" value={password} setValue={setPassword} forgotPassword/>
                            </View>
                        </View>

                        <View style={styles.links}>
                            <CustomButton onPress={handlePress} size="fullWidthSize" coloring="defaultColoring" isDisabled={isDisabled}>Login</CustomButton>
                            <AppText style={styles.normalText}>Not a member yet? <Link href="/signup" style={styles.linkStyle}>Sign up now</Link></AppText>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    fullFlex: {
        flex: 1,
        backgroundColor: Colors.colorWhite,
    },

    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorWhite,
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 150,
        gap: 28,
    },

    mainContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 40,
        borderWidth: 1,
        borderColor: Colors.colorGrayFour,
        borderRadius: 8,
        paddingVertical: 32,
        paddingHorizontal: 24,
    },

    mainContent: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 24,
    },

    textsCotainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 8,
    },

    orCotainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 24,
    },

    orLine: {
        flex: 1,
        height: 1,
        backgroundColor: Colors.colorWhiteTwo,
        opacity: 0.8,
    },

    orText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.9,
        letterSpacing: -0.28,
        color: Colors.colorGray,
    },

    authFormItems: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 24,
    },

    links: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },

    normalTitle: {
        fontFamily: 'GTWalsheimProMedium',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 22.5,
        letterSpacing: -0.36,
        color: Colors.colorTextInput,
    },

    normalText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.9,
        letterSpacing: -0.28,
        color: Colors.colorGrayTwo,
    },

    linkStyle: {
        color: Colors.mainColor,
        fontFamily: 'GTWalsheimProMedium',
        fontWeight: '500',
    }
})

export default Login
