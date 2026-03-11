import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="index" options={{ title: "Home" }} />
      <Drawer.Screen name="exercicio1/index" options={{ title: "Exercício 1" }} />
      <Drawer.Screen name="exercicio2/index" options={{ title: "Exercício 2" }} />
      <Drawer.Screen name="exercicio3/index" options={{ title: "Exercício 3" }} />
      <Drawer.Screen name="exercicio4/index" options={{ title: "Exercício 4" }} />
      <Drawer.Screen name="exercicio5/index" options={{ title: "Exercício 5" }} />
      <Drawer.Screen name="exercicio6/index" options={{ title: "Exercício 6" }} />
      <Drawer.Screen name="exercicio7/index" options={{ title: "Exercício 7" }} />
      <Drawer.Screen name="exercicio8/index" options={{ title: "Exercício 8" }} />
      <Drawer.Screen name="exercicio9/index" options={{ title: "Exercício 9" }} />
      <Drawer.Screen name="exercicio10/index" options={{ title: "Exercício 10" }} />
    </Drawer>
  );
}