import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="exercicio1/index" options={{ title: "Exercício 1" }} />
      <Stack.Screen name="exercicio2/index" options={{ title: "Exercício 2" }} />
    </Stack>
  );
}