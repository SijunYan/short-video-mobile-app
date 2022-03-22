import { StyleSheet, Text, View } from "react-native";

export default function Inbox() {
  return (
    <View style={styles.container}>
      <Text>Inbox Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: "center", justifyContent: "center" },
});
