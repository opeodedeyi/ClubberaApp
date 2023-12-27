import { View, Text, TextInput, StyleSheet } from 'react-native';
import { AppText } from '@/Components/Utility/AppText';
import Colors from '@/constants/Colors';
import Reactimport, { useState } from 'react';


type KeyTypeOptions = 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad' | 'url';
type AutoCompleteOptions = 'username' | 'email' | 'name' | 'tel' | 'street-address' | 'postal-code';
type AutoCapitalizeOptions = 'none' | 'sentences' | 'words' | 'characters';

interface MainInputProps {
    placeholder?: string;
    keyboardType?: KeyTypeOptions;
    label?: string;
    value: string;
    setValue: any;
    autoComplete?: AutoCompleteOptions;
    autoCapitalize?: AutoCapitalizeOptions;
}

const MainInput: React.FC<MainInputProps> = ({ placeholder, keyboardType, label, value, setValue, autoComplete, autoCapitalize }) => {
    const [focused, setFocused] = useState(false);

    return (
        <View style={styles.container}>
            { label && <AppText style={styles.label}>{label}</AppText> }
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={(text) => setValue(text)}
                keyboardType={keyboardType}
                autoComplete={autoComplete}
                autoCapitalize={autoCapitalize}
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

    label: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.9,
        letterSpacing: -0.28,
        color: Colors.colorDarkTwo,
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

export default MainInput;