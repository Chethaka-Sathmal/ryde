import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ title: "Tabs" }} />
      <Stack.Screen name="bookRide" options={{ title: "BookRide" }} />
      <Stack.Screen name="confirmRide" options={{ title: "ConfirmRide" }} />
      <Stack.Screen name="findRide" options={{ title: "FindRide" }} />
    </Stack>
  );
}
