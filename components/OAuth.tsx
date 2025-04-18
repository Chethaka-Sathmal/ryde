import { View, Text, Image } from "react-native";
import CustomButton from "./CustomButton";
import { icons } from "@/constants";
import { ButtonProps } from "react-native";

export default function OAuth({ title, onPress }: ButtonProps) {
  return (
    <View className="flex-1 items-center mt-[3vh]">
      <View className="flex-row justify-center items-center">
        <View className="bg-gray-300 w-40 h-[0.3vh] rounded-full" />
        <Text className="text-gray-400 font-jakarta-semibold mx-[5vw] text-base">
          Or
        </Text>
        <View className="bg-gray-300 w-40 h-[0.3vh] rounded-full" />
      </View>
      <CustomButton
        title={title}
        className="mt-[3vh]"
        bgVariant="outline"
        textVariant="primary"
        IconLeft={() => (
          <Image
            source={icons.google}
            resizeMode="contain"
            className="w-[5vw]"
          />
        )}
        onPress={onPress}
      />
    </View>
  );
}
