import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Navigation from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";

Amplify.configure(awsconfig);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
