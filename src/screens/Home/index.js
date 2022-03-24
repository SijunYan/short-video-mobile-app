import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import Post from "../../components/Post";
import { Viewport } from "@skele/components";
import { listPosts } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
// import { postsData } from "../../../dummyData/postsData";

export default function Home() {
  const [postsData, setPostsData] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        console.log(response);
        setPostsData(response.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <View style={styles.container}>
      <Viewport.Tracker>
        <FlatList
          data={postsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post postData={item} />}
          showsHorizantalScrollIndicator={false}
          snapToInterval={Dimensions.get("screen").height - 44}
          snapToAlignment="start"
          decelerationRate={"fast"}
        />
      </Viewport.Tracker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
