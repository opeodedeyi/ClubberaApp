import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';
import Svg, { G, Path, Rect, Defs, ClipPath } from 'react-native-svg';
import React from 'react';


type ButtonSize = 'defaultSize' | 'normalSize' | 'buttonNoButtonSize' | 'fullWidthSize' | 'formHeaderSize' | 'tableButtonSize' | 'backSize';
type ButtonColoring = 'defaultColoring' | 'inverseColoring' | 'googleColoring' | 'buttonNoButtonColoring';

interface CustomButtonProps {
    size?: ButtonSize;
    coloring?: ButtonColoring;
    onPress: () => void;
    showBackSVG?: boolean;
    showGoogleSVG?: boolean;
    children?: React.ReactNode;
    isDisabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ size='defaultSize', coloring='defaultColoring', onPress, children, showBackSVG, showGoogleSVG, isDisabled }) => {
    const handlePress = isDisabled ? () => {} : onPress;
    const buttonStyle = isDisabled ? styles.disabledColoring : styles[coloring];
    const textStyle = isDisabled ? styles.disabledColoringText : styles[`${coloring}Text`];

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.customButton, styles[size] as any, buttonStyle]} disabled={isDisabled} >
            {showBackSVG && 
                <Svg width="6" height="11" viewBox="0 0 6 11" fill="none" style={styles.backDierction}>
                    <Path d="M4.98867 9.5L1 5.5L4.98867 1.5" stroke="#777474" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </Svg>
            }

            {showGoogleSVG &&
                <Svg width="18" height="17" viewBox="0 0 18 17" fill="none">
                    <G clip-path="url(#clip0_638_80133)">
                        <Path d="M17.1702 8.68417C17.1702 8.14035 17.1243 7.59359 17.0263 7.05859H9.16602V10.1392H13.6672C13.4804 11.1328 12.8803 12.0117 12.0015 12.5703V14.5692H14.6869C16.2638 13.1758 17.1702 11.1181 17.1702 8.68417Z" fill="#4285F4"/>
                        <Path d="M9.16563 16.5005C11.4132 16.5005 13.3086 15.792 14.6895 14.5692L12.0041 12.5703C11.257 13.0582 10.2925 13.3346 9.16869 13.3346C6.99464 13.3346 5.15129 11.9265 4.48989 10.0334H1.71875V12.0941C3.13341 14.7955 6.01479 16.5005 9.16563 16.5005Z" fill="#34A853"/>
                        <Path d="M4.48657 10.0336C4.1375 9.03999 4.1375 7.96411 4.48657 6.97054V4.90991H1.71849C0.536545 7.17043 0.536545 9.83367 1.71849 12.0942L4.48657 10.0336Z" fill="#FBBC04"/>
                        <Path d="M9.16562 3.66644C10.3537 3.6488 11.502 4.07798 12.3624 4.86578L14.7416 2.58174C13.2351 1.22367 11.2356 0.477023 9.16562 0.500539C6.01479 0.500539 3.13341 2.20548 1.71875 4.90987L4.48683 6.9705C5.14517 5.07449 6.99158 3.66644 9.16562 3.66644Z" fill="#EA4335"/>
                    </G>
                    <Defs>
                        <ClipPath id="clip0_638_80133">
                            <Rect width="16.6667" height="16" fill="white" transform="translate(0.666016 0.5)"/>
                        </ClipPath>
                    </Defs>
                </Svg>
            }
            <Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    customButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },

    backDierction: {
        height: 8,
        margin: 0,
        padding: 0,
    },

    socialLoginButton: {
        display: 'flex',
        height: 45,
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        fontSize: 16,
        fontWeight: '400',
        gap: 16,
    },

    defaultColoring: {
        backgroundColor: Colors.mainColor,
    },

    defaultColoringText: {
        fontFamily: 'GTWalsheimProMedium',
        color: Colors.colorWhiteOne,
    },

    inverseColoring: {
        borderWidth: 1.2,
        borderColor: Colors.colorWhiteTwo,
        backgroundColor: Colors.colorWhite,
    },

    inverseColoringText: {
        fontFamily: 'GTWalsheimProMedium',
        color: Colors.colorDarkOne,
    },

    backColoring: {
        borderWidth: 1,
        borderColor: Colors.colorWhiteTwo,
        backgroundColor: Colors.colorWhite,
    },

    backColoringText: {
        fontFamily: 'GTWalsheimProRegular',
        fontWeight: '400',
        color: Colors.colorDarkTwo,
    },

    buttonNoButtonColoring: {
        backgroundColor: 'transparent',
    },

    buttonNoButtonColoringText: {
        fontFamily: 'GTWalsheimProRegular',
        fontWeight: '400',
        color: Colors.colorGrayTwo,
    },

    googleColoring: {
        borderRadius: 8,
        borderWidth: 1.2,
        borderColor: Colors.colorWhiteTwo,
        backgroundColor: Colors.colorWhiteFour,
    },

    googleColoringText: {
        fontFamily: 'GTWalsheimProMedium',
        color: Colors.colorGrayTwo,
    },

    disabledColoring: {
        backgroundColor: Colors.colorWhiteTwo,
    },

    disabledColoringText: {
        fontFamily: 'GTWalsheimProMedium',
        color: Colors.colorDarkOne,
    },

    buttonNoButtonSize: {
        fontSize: 14,
        fontWeight: '400',
    },

    defaultSize: {
        fontSize: 14,
        fontWeight: '500',
        paddingVertical: 7,
        paddingHorizontal: 18,
        borderRadius: 100,
        gap: 10,
    },

    normalSize: {
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 21.6,
        paddingVertical: 9,
        paddingHorizontal: 28,
        borderRadius: 100,
    },

    fullWidthSize: {
        fontSize: 16,
        paddingVertical: 15,
        paddingHorizontal: 24,
        borderRadius: 100,
        width: '100%',
        gap: 16,
    },

    formHeaderSize: {
        display: 'flex',
        paddingVertical: 10,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 100,
        fontSize: 14,
        fontWeight: '500',
    },

    backSize: {
        display: 'flex',
        paddingVertical: 10,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        borderRadius: 8,
        fontWeight: '500',
    },
    
    tableButtonSize: {
        fontSize: 16,
        fontWeight: '500',
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderRadius: 100,
        height: 32,
        width: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
});

export default CustomButton;