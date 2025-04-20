import { useState } from "react";
import { Text, ScrollView, Image, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSignIn } from "@clerk/clerk-expo";
import CustomInputField from "@/components/CustomInputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { images, icons } from "@/constants";

export default function SignIn() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  async function onSignInPress() {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password: form.password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/(main)/(tabs)/home");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }
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
          <CustomButton
            title="Sign In"
            onPress={onSignInPress}
            className="mt-[5vh]"
          />
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
        </View>
      </ScrollView>
    </>
  );
}
