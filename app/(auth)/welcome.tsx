import { useState, useRef } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import CustomButton from "@/components/CustomButton";
import { onboarding } from "@/constants";

export default function Welcome() {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="h-full flex items-center bg-white">
      <TouchableOpacity
        className="w-full flex items-end p-[5vw]"
        onPress={() => router.replace("/(auth)/signUp")}
      >
        <Text className="text-black text-base font-jakarta-bold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        dot={
          <View className="w-[7vw] h-[0.8vh] bg-gray-400 rounded-full mx-1" />
        }
        activeDot={
          <View className="w-[7vw] h-[0.8vh] bg-primary-500 rounded-full mx-1" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
        scrollEnabled={false}
      >
        {onboarding.map((item) => (
          <View key={item.id} className="flex items-center py-0">
            <Image
              source={item.image}
              className="w-[100vw] h-[44vh]"
              resizeMode="contain"
            />
            <Text className="font-jakarta-bold text-4xl text-center mt-[2vh] mx-[5vw]">
              {item.title}
            </Text>
            <Text className="text-center text-gray-600 font-jakarta-semibold mt-[3vh] mx-[10vw] text-lg">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Sign Up" : "Next"}
        className="mt-[5vh] mb-[10vh]"
        onPress={() => {
          isLastSlide
            ? router.replace("/(auth)/signUp")
            : swiperRef.current?.scrollBy(1);
        }}
      />
    </SafeAreaView>
  );
}
