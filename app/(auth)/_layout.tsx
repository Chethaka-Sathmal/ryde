import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "ios_from_right",
      }}
    >
      <Stack.Screen
        name="welcome"
        options={{
          title: "Welcome",
        }}
      />
      <Stack.Screen
        name="signIn"
        options={{
          title: "Sign In",
        }}
      />
      <Stack.Screen
        name="signUp"
        options={{
          title: "Sign Up",
        }}
      />
    </Stack>
  );
}
