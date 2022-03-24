import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { v4 as uuidv4 } from "uuid";

import { Storage, API, graphqlOperation, Auth } from "aws-amplify";
import { useRoute, useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { createPost } from "../../graphql/mutations";

export default function CreatePost() {
  const [desc, setDesc] = useState();
  const [videoKey, setVideoKey] = useState(null);

  const route = useRoute();
  const navigation = useNavigation();

  //upload to S3, return uri
  const uploadToStorage = async (imagePath) => {
    try {
      const response = await fetch(imagePath);
      const blob = await response.blob();
      const filename = `${uuidv4()}.mp4`;
      const s3Response = await Storage.put(filename, blob);
      setVideoKey(s3Response.key);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    uploadToStorage(route.params.videoUri);
  }, []);

  //create post with video uri in the database (API), navigate to homescreen
  const onPublish = async () => {
    if (!videoKey) {
      console.warn("VIdeo is not yet uploaded");
      return;
    }
    try {
      const userInfo = await Auth.currentAuthenticatedUser();

      const newPost = {
        videoUri: videoKey,
        description: description,
        userID: userInfo.attributes.sub,
        songID: "b6e2ee3a-04a7-4b25-aef5-90b41e4bba33",
      };
      const response = await API.graphql(
        graphqlOperation(createPost, { input: newPost })
      );
      navigation.navigate("Home", { screen: "Home" });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={desc}
        onChangeText={setDesc}
        style={styles.desc}
        numberOfLines={5}
      ></TextInput>
      <TouchableOpacity style={styles.button} onPress={onPublish}>
        <Text style={styles.buttonText}>Publish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: "center", justifyContent: "space-between" },
  desc: { width: "100%", height: "150px", backgroundColor: "white" },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    height: 60,
  },
  buttonText: { color: "white", fontSize: 16, fontWeight: "bold" },
});
