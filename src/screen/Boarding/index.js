import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image, 
} from "react-native";
import React, { useRef, useState } from "react";
import { scale } from "react-native-size-matters";
import Swiper from "react-native-web-swiper";
import {  colors } from '../../constant';
import Images from '../../config/Images';
import { styles } from './style';
import Button from "../../component/Button";
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function OnBoarding({ navigation }) {
    const swiperRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    var introScreenArr = [
        {
            image: `${Images.s1}`,
            header: "Your Reliable Delivery Partner",
            content:
                "Experience seamless package delivery like never before. Earn money while providing excellent service to customers.",
        },
        {
            image: `${Images.s2}`,
            header: "Efficient Deliveries, Navigate with Ease",
            content:
                "App will guide you through the best delivery routes, saving you time and ensuring timely deliveries. Stay organised and receive real-time updates.",
        },
        {
            image: `${Images.s3}`,
            header: "Deliver with Confidence",
            content:
                "Your dedication and excellent service will be rewarded, creating more opportunities for you to grow your delivery business.",
        },
    ];
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.skipButton}
                    onPress={() => {
                        navigation.navigate("Login");
                    }}
                >
                    <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
            </View>

            <View style={[styles.content,]}>
                <Swiper
                    ref={swiperRef}
                    from={0}
                    springConfig={{ speed: 11 }}
                    minDistanceForAction={0.15}
                    onIndexChanged={(idxActive) => setCurrentIndex(idxActive)}
                    controlsProps={{
                        dotsTouchable: false,
                        prevPos: false,
                        nextPos: false,
                        dotsPos: false,
                    }}
                >
                    {introScreenArr.map((i, index) => {
                        return (
                            <View>
                                <View style={[styles.imageContainer, { paddingLeft: index != 0 ? scale(60) : 0 }]}>
                                    <Image source={i.image} style={[styles.truckImage]} />
                                </View>
                                <Text style={styles.title}>{i.header}</Text>
                                <Text style={styles.description}>{i.content}</Text>
                            </View>
                        );
                    })}
                </Swiper>
            </View>
            <View style={styles.btnStyle}>
                <Button
                    title={'Next'}
                    rightIcon={
                        <AntDesign
                          name="arrowright"
                          size={scale(20)}
                          color={colors.white}
                          style={styles.iconStyle}
                        />
                    }
                    onPress={() => { 
                        if (currentIndex == 2) {
                            navigation.navigate("Login");
                          } else swiperRef.current.goToNext();
                     }}
                    style={styles.btn}
                />
            
            </View>
        </SafeAreaView>
    );
};



