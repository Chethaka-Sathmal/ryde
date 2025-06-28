import { Redirect } from "expo-router";

export default function Index() {
  const userId = false;

  if (userId) return <Redirect href={"/(main)/(tabs)/home"} />;

  return <Redirect href={"/(auth)/welcome"} />;
}
