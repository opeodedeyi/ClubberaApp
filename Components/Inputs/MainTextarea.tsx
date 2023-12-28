import { View, TextInput, StyleSheet } from 'react-native';
import { AppText } from '@/Components/Utility/AppText';
import Colors from '@/constants/Colors';
import { useState } from 'react';


interface MainInputProps {
    placeholder?: string;
    label?: string;
    value: string;
    setValue: any;
}

const MainInput: React.FC<MainInputProps> = ({ placeholder, label, value, setValue }) => {
    const [focused, setFocused] = useState(false);

    return (
        <View style={styles.container}>
            { label && <AppText style={styles.label}>{label}</AppText> }
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={(text) => setValue(text)}
                keyboardType='default'
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                multiline={true}
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
        minHeight: 135,
        width: '100%',
        paddingVertical: 14,
        paddingHorizontal: 16,
        fontFamily: 'GTWalsheimProRegular',
        fontWeight: '400',
        borderWidth: 1,
        borderColor: Colors.colorWhiteTwo,
        borderRadius: 8,
        fontSize: 14,
        lineHeight: 18.9,
        letterSpacing: -0.28,
        textAlignVertical: 'top',
    },
});

export default MainInput;