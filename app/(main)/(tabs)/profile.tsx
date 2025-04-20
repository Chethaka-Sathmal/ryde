import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useClerk } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import CustomButton from "@/components/CustomButton";

export default function Profile() {
  const { signOut } = useClerk();

  async function handleSignOut() {
    try {
      await signOut();
      // Redirect to your desired page
      Linking.openURL(Linking.createURL("/(auth)/signIn"));
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <CustomButton title="Sign out" onPress={handleSignOut} />
    </SafeAreaView>
  );
}
