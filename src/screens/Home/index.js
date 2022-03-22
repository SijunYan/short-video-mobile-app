import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { postsData } from "../../../data/postsData.js";
import Post from "../../components/Post";

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post postData={item} />}
        showsHorizantalScrollIndicator={false}
        snapToInterval={Dimensions.get("screen").height - 45}
        snapToAlignment="start"
        decelerationRate={"fast"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
