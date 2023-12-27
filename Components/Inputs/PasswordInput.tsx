import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { AppText } from '@/Components/Utility/AppText';
import Colors from '@/constants/Colors';
import Reactimport, { useState } from 'react';


interface PasswordInputProps {
    placeholder?: string;
    label?: string;
    value: string;
    setValue: any;
    forgotPassword?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ placeholder, label, value, setValue, forgotPassword }) => {
    const [focused, setFocused] = useState(false);
    const [hidePassword, setHidePassword] = useState(false);

    return (
        <View style={styles.container}>
            { label && <View style={styles.labelContainer}>
                <AppText style={styles.label}>{label}</AppText>
                { forgotPassword && <Link href="/forgotpassword" style={styles.forgotLabel}>Forgot password?</Link> }
            </View> }
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={(text) => {
                    const trimText = text.trim();
                    setValue(trimText);
                }}
                secureTextEntry={hidePassword}
                autoCapitalize="none"
                keyboardType='default'
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        maxWidth: 500,
        gap: 8,
    },

    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'stretch',
    },

    label: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.9,
        letterSpacing: -0.28,
        color: Colors.colorDarkTwo,
    },

    forgotLabel: {
        fontFamily: 'GTWalsheimProMedium',
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 18.9,
        letterSpacing: -0.28,
        color: Colors.mainColor,
    },

    input: {
        color: Colors.colorTextInput,
        height: 45,
        width: '100%',
        paddingVertical: 6,
        paddingHorizontal: 16,
        fontFamily: 'GTWalsheimProRegular',
        fontWeight: '400',
        borderWidth: 1,
        borderColor: Colors.colorWhiteTwo,
        borderRadius: 8,
        fontSize: 16,
    },
});

export default PasswordInput;