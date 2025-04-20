import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useClerk } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";

export default function Profile() {
  const { signOut } = useClerk();
  const router = useRouter();

  async function handleSignOut() {
    try {
      await signOut();
      router.replace("/(auth)/signIn");
    } catch (err) {
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
