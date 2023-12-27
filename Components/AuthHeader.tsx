import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Logo from '@/Components/Utility/Logo';
import CustomButton from '@/Components/Utility/CustomButton';
import Colors from '@/constants/Colors';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import React from 'react'

interface AuthHeaderProps {
    button?: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ button }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        } else {
            router.push("/")
        }
    };

    return (
        <SafeAreaView edges={['right', 'top', 'left']} >
            <View style={styles.container}>
                <CustomButton size="backSize" coloring="inverseColoring" onPress={handlePress} showBackSVG>
                    {button ? button : null}
                </CustomButton>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 71,
        backgroundColor: Colors.colorWhite,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 24,
        paddingVertical: 16,
    },
})

export default AuthHeader