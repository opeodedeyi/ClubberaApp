import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CreateHeader from '@/Components/CreateHeader';
import CustomButton from '@/Components/Utility/CustomButton';
import Colors from '@/constants/Colors';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Link, router } from 'expo-router';
import { AppText } from '@/Components/Utility/AppText';

const creategroup = () => {
    const navigation = useNavigation();
    const [step, setStep] = useState(4);

    const handleBackPress = () => {
        if (step <= 1 || step === 5) {
            if (navigation.canGoBack()) {
                navigation.goBack();
            } else {
                router.push("/")
            }
        } else {
            setStep(prevStep => prevStep - 1);
        }
    };

    return (
        <View>
            <CreateHeader onPress={handleBackPress} progress={step}/>
            <ScrollView>
                <Text>creategroup {step}</Text>
            </ScrollView>
        </View>
        
    )
}

export default creategroup