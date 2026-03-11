import { StyleSheet, Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}> 
        <Image
          source={require("../../assets/images/perfil.jpg")}
          style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 10 }}
        />
        <Text style={styles.title}>Carlos Silva</Text>
        <Text style={styles.subtitle}>Desenvolvedor | React Native</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d5d5d5", // Azul claro
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  card:{
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 360,
    shadowColor: "#adadad", // Sombra cinza
    shadowOffset: { // Para iOS
      width: 4,
      height: 4,
    },
    shadowOpacity: 0.25, // Para iOS
    shadowRadius: 4, // Para iOS
    elevation: 5, // Para Android
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#363636",
  },
});
