import { StyleSheet, Text, View } from "react-native";
import Post from "../../components/Post";

const postData = {
  id: "p1",
  video: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  user: {
    id: "u1",
    username: "sijun_yan",
    profilePic:
      "https://www.inpixio.com/remove-background/images/main-before.jpg",
  },
  desc: "hahaha, it's so zmazing!",
  songName: "AVA - The end of the world",
  songImage: "https://www.inpixio.com/remove-background/images/main-before.jpg",
  likes: 123,
  comments: 23,
  shares: 44,
};

export default function Home() {
  return (
    <View style={styles.container}>
      <Post postData={postData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
