import { StyleSheet, Text, View } from "react-native";

export default function Upload() {
  return (
    <View style={styles.container}>
      <Text>Upload Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: "center", justifyContent: "center" },
});
