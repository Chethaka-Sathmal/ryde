import { Stack } from "expo-router";

export default function MainLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="book-ride" />
      <Stack.Screen name="confirm-ride" />
      <Stack.Screen name="find-ride" />
    </Stack>
  );
}
