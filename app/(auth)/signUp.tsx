import { useState } from "react";
import { Text, ScrollView, Image, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CustomInputField from "@/components/CustomInputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { images, icons } from "@/constants";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
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
            Create your account
          </Text>
        </View>
        <View className="px-[5vw]">
          <CustomInputField
            label="Name"
            placeholder="Enter your name"
            containerStyles="mt-[4vh]"
            Icon={() => (
              <Image
                source={icons.person}
                className="w-[6vw]"
                resizeMode="contain"
              />
            )}
            value={form.name}
            onChangeText={(value) => setForm({ ...form, name: value })}
          />
          <CustomInputField
            label="Email"
            placeholder="Enter your email"
            inputMode="email"
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
          <CustomButton title="Sign Up" onPress={() => console.log(form)} />
        </View>
        <OAuth title="Sing up with Google" />
        <Link
          href={"/(auth)/signIn"}
          className="text-center mt-[2vh] text-lg font-jakarta"
        >
          <Text>Already have an account? </Text>
          <Text className="text-primary-500 font-jakarta-semibold">
            Sing in
          </Text>
        </Link>
      </ScrollView>
    </>
  );
}
