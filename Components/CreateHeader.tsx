import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import CustomButton from '@/Components/Utility/CustomButton';
import React from 'react'

interface CreateHeaderProps {
    button?: string;
    progress?: number;
    onPress?: () => void;
}

interface StepCircleProps {
    progress?: number;
    targetNo?: number;
    children?: React.ReactNode;
}

interface ProgressLineProps {
    progress?: number;
    targetNo?: number;
}

const StepCircle: React.FC<StepCircleProps> = ({ progress=0, children, targetNo=1 }) => {
    const styles = StyleSheet.create({
        stepCircle: {
            width: 24,
            height: 24,
            borderRadius: 100,
            backgroundColor: Colors.colorWhiteTwo,
            justifyContent: 'center',
            alignItems: 'center',
        },

        stepCircleGreen: {
            width: 24,
            height: 24,
            borderRadius: 100,
            backgroundColor: Colors.mainColorCard,
            justifyContent: 'center',
            alignItems: 'center',
        },
    
        stepCircleText: {
            fontFamily: 'GTWalsheimProMedium',
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 18.9,
            letterSpacing: -0.42,
            color: Colors.colorGray,
        },

        stepCircleGreenText: {
            fontFamily: 'GTWalsheimProMedium',
            fontSize: 14,
            fontWeight: '500',
            lineHeight: 18.9,
            letterSpacing: -0.42,
            color: Colors.colorWhiteTwo,
        },
    })

    const circleStyle = progress > (targetNo-1) ? styles.stepCircleGreen : styles.stepCircle;
    const circleTextStyle = progress > (targetNo-1) ? styles.stepCircleGreenText : styles.stepCircleText;

    return (
        <View style={circleStyle}>
            <Text style={circleTextStyle}>{children}</Text>
        </View>
    );
};


const ProgressLine: React.FC<ProgressLineProps> = ({ progress=0, targetNo=1 }) => {
    const styles = StyleSheet.create({
        progressLine: {
            flex: 1,
            height: 1,
            backgroundColor: Colors.colorWhiteTwo,
            opacity: 0.8,
        },

        progressLineHalfColored: {
            height: "100%",
            width: "50%",
            backgroundColor: Colors.mainColorCard,
            opacity: 0.8,
        },

        progressLineFullColored: {
            height: "100%",
            width: "100%",
            backgroundColor: Colors.mainColorCard,
            opacity: 0.8,
        },
    })

    const lineStyle = () => {
        if (progress === targetNo) {
            return styles.progressLineHalfColored;
        } else if (progress > targetNo) {
            return styles.progressLineFullColored;
        } else {
            return;
        }
    }

    return (
        <View style={styles.progressLine}>
            <View style={lineStyle()}></View>
        </View>
    );
};


const CreateHeader: React.FC<CreateHeaderProps> = ({ progress=0, onPress=() => {} }) => {

    return (
        <SafeAreaView edges={['right', 'top', 'left']} style={styles.overallContainer}>
            <View style={styles.TopHeader}>
                <CustomButton size="backSize" coloring="inverseColoring" onPress={onPress} showBackSVG>Back</CustomButton>
            </View>
            {progress > 0 && progress < 5 &&
                <View style={styles.BottomHeader}>
                    <StepCircle progress={progress} targetNo={1}>1</StepCircle>
                        <ProgressLine progress={progress} targetNo={1}/>
                    <StepCircle progress={progress} targetNo={2}>2</StepCircle>
                        <ProgressLine progress={progress} targetNo={2}/>
                    <StepCircle progress={progress} targetNo={3}>3</StepCircle>
                        <ProgressLine progress={progress} targetNo={3}/>
                    <StepCircle progress={progress} targetNo={4}>4</StepCircle>
                </View>
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    overallContainer: {
        backgroundColor: Colors.colorWhite,
        width: '100%',
    },

    TopHeader: {
        height: 72,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 24,
        paddingVertical: 16,
    },

    BottomHeader: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.colorWhiteTwo,
        borderBottomStyle: 'solid',
        borderTopWidth: 1,
        borderTopColor: Colors.colorWhiteTwo,
        borderTopStyle: 'solid',
        gap: 8,
    },

    customButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 32,
        height: 32,
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.colorWhiteTwo,
        backgroundColor: Colors.colorWhite,
    },
})

export default CreateHeader