import { useState } from "react";
import { Text, ScrollView, Image, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CustomInputField from "@/components/CustomInputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { images, icons } from "@/constants";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  return (
    <>
      <StatusBar
        style="dark"
        translucent={true}
        backgroundColor="transparent"
      />
      <ScrollView className="flex-1 bg-white">
        <View className="relative h-[27vh]">
          <Image source={images.signupCar} className="h-full w-full" />
          <Text className="font-jakarta-bold text-3xl absolute bottom-[0.1vh] ml-[5vw]">
            Welcome back 👋
          </Text>
        </View>
        <View className="px-[5vw]">
          <CustomInputField
            label="Email"
            placeholder="Enter your email"
            inputMode="email"
            containerStyles="mt-[4vh]"
            Icon={() => (
              <Image
                source={icons.email}
                className="w-[6vw]"
                resizeMode="contain"
              />
            )}
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />
          <CustomInputField
            label="Password"
            placeholder="Enter your password"
            secureTextEntry={true}
            Icon={() => (
              <Image
                source={icons.lock}
                className="w-[6vw]"
                resizeMode="contain"
              />
            )}
            value={form.password}
            onChangeText={(value) => setForm({ ...form, password: value })}
          />
        </View>
        <View className="flex items-center mt-[5vh]">
          <CustomButton title="Sign In" onPress={() => console.log(form)} />
        </View>
        <OAuth title="Sing in with Google" />
        <Link
          href={"/(auth)/signUp"}
          className="text-center mt-[2vh] text-lg font-jakarta"
        >
          <Text>Don't have an account? </Text>
          <Text className="text-primary-500 font-jakarta-semibold">
            Sign up
          </Text>
        </Link>
      </ScrollView>
    </>
  );
}
