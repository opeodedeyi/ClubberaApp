import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import CustomButton from '@/Components/Utility/CustomButton';
import { AppText } from '@/Components/Utility/AppText';
import { router } from 'expo-router';
import React, { useState, useRef, useEffect } from 'react';


interface WorkCardProps {
    image: any;
    title: string;
    description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ image, title, description }) => {
    const [showDescription, setShowDescription] = useState(false);

    const renderStyledTitle = () => {
        const titleParts = title.split('&').map((part, index, array) => {
            // For all parts except the last, add the '&' back
            return (
                <Text key={index}>
                    {part}
                    {index < array.length - 1 ? (
                        <Text style={styles.normalNantes}>&</Text>
                    ) : null}
                </Text>
            );
        });

        return <AppText style={styles.workCardTitle}>{titleParts}</AppText>;
    };

    const handleCardClick = () => {
        setShowDescription(true);
        setTimeout(() => {
            setShowDescription(false);
        }, 2700);
    };

    return (
        <TouchableOpacity style={styles.WorkCardContainer} onPress={handleCardClick}>
            { showDescription ?
                <View style={styles.workCardDescription}>
                    {renderStyledTitle()}
                    <AppText style={styles.workCardDescriptionText}>{description}</AppText>
                </View>
                :
                <View style={styles.workCardBasic}>
                    <Image source={image} style={styles.workCardImage} />
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0.40)', 'rgba(0, 0, 0, 0.00)']}
                        start={[0, 0]}
                        end={[1, 0]}
                        style={styles.linearGradient}/>
                    {renderStyledTitle()}
                </View>
            }
        </TouchableOpacity>
    );
};

interface createCard {
    id: number;
    image: any;
    text: string;
}

const HorizontalDeck: React.FC = () => {
    const [cards, setCards] = useState<createCard[]>([
        { id: 1, image: require('@/assets/images/dance_com.png'), text: 'Dance community' },
        { id: 2, image: require('@/assets/images/game_com.png'), text: 'Game community' },
        { id: 3, image: require('@/assets/images/gym_com.png'), text: 'Gym community' },
        { id: 4, image: require('@/assets/images/cooking_com.png'), text: 'Cooking community' },
        { id: 5, image: require('@/assets/images/sport_com.png'), text: 'Sport community' },
    ]);

    const scrollX = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const scrollAnimation = Animated.loop(
            Animated.timing(scrollX, {
                toValue: 1,
                duration: 5000,
                useNativeDriver: true,
            })
        );

        scrollAnimation.start();

        return () => {
            scrollAnimation.stop();
        };
    }, []);

    return (
        <View style={styles.createCardsContainer}>
            <Animated.ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
            >
                {cards.map((card) => (
                    <View key={card.id} style={styles.createCardContainer}>
                        <Image source={card.image} style={styles.createCardImage} />
                        <LinearGradient
                            colors={['rgba(0, 0, 0, 0.40)', 'rgba(0, 0, 0, 0.00)']}
                            start={[0, 0]}
                            end={[1, 0]}
                            style={styles.linearGradient}/>
                        <Text style={styles.createCardText}>{card.text}</Text>
                    </View>
                ))}
            </Animated.ScrollView>
        </View>
    );
};


const index = () => {
    const [user, setUser] = useState(false);

    return (
        <ScrollView>
            {
                user ?
                    <View>
                        <Text>Logged in</Text>
                    </View>
                    :
                    <View> 
                        <View style={styles.heroContainer}>
                            <View style={styles.heroContainerText}>
                                <AppText style={styles.numberOne}>Your number one community 🥇</AppText>
                                <View style={styles.taglineAndSlogan}>
                                    <Text style={styles.tagLine}>Discover, Connect {'\n'} and Thrive <Text style={styles.italicNantes}>with</Text> {'\n'} <Text style={styles.textGreen}>Clubbera</Text></Text>
                                    <AppText style={styles.slogan}>We connect individuals with local communities and clubs</AppText>
                                </View>
                            </View>
                            <View style={styles.heroButtons}>
                                <CustomButton onPress={() => router.push("/creategroup")} size="normalSize" coloring="defaultColoring">Create group</CustomButton>
                                <CustomButton onPress={() => router.push("/signup")} size="normalSize" coloring="inverseColoring">Join Clubbera</CustomButton>
                            </View>
                        </View>
                        <View style={styles.heroImages}>
                            <Image style={styles.heroImageOne} source={require('@/assets/images/hero_image_two.png')} />
                            <Image style={styles.heroImageTwo} source={require('@/assets/images/hero_image_four.png')} />
                        </View>
                        <View style={styles.howItWorks}>
                            <View style={styles.howItWorksText}>
                                <Text style={styles.tagLine}>How Clubbera {'\n'} <Text style={styles.italicNantes}>works</Text></Text>
                                <AppText style={styles.howItWorksDescription}>Form new connections with individuals who have common interests through a wide range of physical events. Joining our platform and creating an account is absolutely free.</AppText>
                            </View>
                            <View style={styles.howItWorksCards}>
                                <WorkCard
                                    image={require('@/assets/images/explore_main.png')}
                                    title='Explore & Discover'
                                    description="Discover engaging social experiences on Clubbera. Sign up to explore diverse non-profit clubs matching your interests, find activities and hobbies you love, and foster a vibrant community spirit."/>

                                <WorkCard
                                    image={require('@/assets/images/connect_main.png')}
                                    title='Connect & Engage'
                                    description="Connect with like-minded individuals by joining resonating clubs. Share experiences, ideas, and passions in a user-friendly space. Engage in meaningful conversations, collaborate, and build genuine connections based on shared interests."/>

                                <WorkCard
                                    image={require('@/assets/images/customize_main.png')}
                                    title='Customize & Grow'
                                    description="Bring your vision to life as a club creator on Clubbera. Customize your club's dynamics, add moderators, and shape the environment to match your vision. Foster ownership and enhance user satisfaction as your community grows and thrives."/>
                            </View>
                        </View>
                        <View style={styles.createGroupHero}>
                            <View style={styles.createGroupHeroTop}>
                                <View style={styles.taglineAndSlogan}>
                                    <Text style={styles.tagLine}>Create a <Text style={styles.italicNantes}>group</Text></Text>
                                    <AppText style={styles.slogan}>Start today by creating your dynamic and perfect group.</AppText>
                                </View>
                                <CustomButton onPress={() => router.push("/group/manga-readers")} size="normalSize" coloring="defaultColoring">Create group</CustomButton>
                            </View>
                            
                            <HorizontalDeck/>
                        </View>
                    </View>   
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heroContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorWhite,
        paddingHorizontal: 24,
        paddingTop: 48.5,
        paddingBottom: 56.5,
        gap: 28,
    },

    heroContainerText: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    },

    numberOne: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.9,
        letterSpacing: -0.42,
        color: Colors.colorDarkTwo,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
        borderColor: 'rgba(240, 243, 245, 0.80)',
        borderWidth: 1,
    },

    taglineAndSlogan: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },

    tagLine: {
        fontFamily: 'GTWalsheimProMedium',
        fontSize: 40,
        fontWeight: '500',
        lineHeight: 44,
        letterSpacing: -0.8,
        color: Colors.colorDark,
        textAlign: 'center',
    },

    slogan: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.9,
        letterSpacing: -0.28,
        color: Colors.colorText,
        textAlign: 'center',
    },

    textGreen: {
        color: Colors.mainColor,
    },

    italicNantes: {
        fontFamily: 'NantesBoldItalic',
    },

    normalNantes: {
        fontFamily: 'NantesRegular',
    },

    heroButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },

    heroImages: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        height: 224,
        overflow: 'hidden',
        backgroundColor: Colors.colorWhite,
    },

    heroImageOne: {
        position: 'absolute',
        top: 0,
        left: -44,
        width: 290,
        height: 290,
        borderRadius: 1000,
    },

    heroImageTwo: {
        position: 'absolute',
        top: 0,
        right: -43.25,
        width: 280,
        height: 280,
        borderRadius: 1000,
    },

    howItWorks: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorWhite,
        paddingHorizontal: 24,
        paddingVertical: 60,
        gap: 40,
    },

    howItWorksText: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
    },

    howItWorksDescription: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.9,
        letterSpacing: -0.28,
        color: Colors.colorText,
        textAlign: 'center',
    },

    howItWorksCards: {
        alignItems: 'center',
        gap: 24,
        width: '100%',
    },

    WorkCardContainer: {
        backgroundColor: Colors.colorWhite,
        borderRadius: 2,
        overflow: 'hidden',
        width: '100%',
        height: 200,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    
    workCardDescription: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: Colors.mainColorCard,
        padding: 24,
        gap: 8,
    },

    workCardDescriptionText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 18.9,
        letterSpacing: -0.28,
        color: Colors.colorWhite,
    },

    workCardBasic: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        padding: 24,
        position: 'relative',
    },

    workCardImage: {
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'contain',
    },

    workCardTitle: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21.6,
        letterSpacing: -0.32,
        color: Colors.colorWhite,
    },

    linearGradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },

    createGroupHero: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.colorWhite,
        paddingVertical: 60,
        gap: 40,
    },

    createGroupHeroTop: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
        paddingHorizontal: 24,
    },

    createGroupHeroCards: {
        gap: 16,
    },

    createCardsContainer: {
        height: 250,
    },
    
    createCardContainer: {
        width: 215,
        height: 250,
        marginHorizontal: 8,
        borderRadius: 2,
        overflow: 'hidden',
    },
    
    createCardImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },

    createCardText: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        color: 'white',
        fontFamily: 'GTWalsheimProMedium',
        fontSize: 16,
        fontWeight: '500',
    },
})

export default index
