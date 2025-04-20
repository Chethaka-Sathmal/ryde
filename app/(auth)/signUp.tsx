import { useState } from "react";
import { Text, ScrollView, Image, View, Modal } from "react-native";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSignUp } from "@clerk/clerk-expo";
import CustomInputField from "@/components/CustomInputField";
import CustomButton from "@/components/CustomButton";
import OAuth from "@/components/OAuth";
import { images, icons } from "@/constants";

export default function SignUp() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  async function onSignUpPress() {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress: form.email,
        password: form.password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display verification modal
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  }

  async function onVerifyPress() {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        setPendingVerification(false);
        setShowConfirmationModal(true);
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
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
          <Image source={images.signupCar} className="h-full w-[100vw]" />
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
          <CustomButton
            title="Sign Up"
            onPress={onSignUpPress}
            className="mt-[5vh]"
          />
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
        </View>
        {/* Verification modal */}
        <Modal
          visible={pendingVerification}
          transparent={true}
          animationType="slide"
          statusBarTranslucent={true}
        >
          <View className="h-full bg-black/45">
            <View className="flex items-center mx-[13vw] mt-[30vh] py-[3vh] px-[4vw] min-h-[30vh] bg-white rounded-[2.5vh] ">
              <Text className="text-3xl font-jakarta-bold">Verification</Text>
              <Text className="text-lg font-jakarta-semibold text-gray-400 text-center mt-[2vh]">
                We have sent an email to {form.email}
              </Text>
              <CustomInputField
                label=""
                placeholder="Your code"
                Icon={() => (
                  <Image
                    source={icons.lock}
                    className="w-[6vw]"
                    resizeMode="contain"
                  />
                )}
                value={form.password}
                onChangeText={(value) => setCode(value)}
              />
              <CustomButton
                title="Verify"
                className="mt-[3vh]"
                onPress={onVerifyPress}
              />
            </View>
          </View>
        </Modal>
        {/* Success modal */}
        <Modal
          visible={showConfirmationModal}
          transparent={true}
          animationType="slide"
          statusBarTranslucent={true}
        >
          <View className="h-full bg-black/45">
            <View className="flex items-center mx-[13vw]  mt-[30vh] py-[3vh] px-[4vw] min-h-[30vh] bg-white rounded-[2.5vh] ">
              <View className="flex-row items-center justify-center">
                <Text className="text-3xl font-jakarta-bold">Verified </Text>
                <Text className="text-3xl">👍</Text>
              </View>
              <Image
                source={images.check}
                className="w-[30vw] h-[30vw] mt-[2vh]"
                resizeMode="contain"
              />
              <Text className="text-lg font-jakarta-semibold text-gray-400 text-center mt-[2vh]">
                You have successfully verified your account
              </Text>
              <CustomButton
                title="Go to home"
                className="mt-[3vh]"
                onPress={() => router.replace("/(main)/(tabs)/home")}
              />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
}
