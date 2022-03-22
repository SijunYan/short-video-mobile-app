import * as React from "react";
import {
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import styles from "./styles";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";

export default function Post({ postData }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  console.log(status);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.videoContainer}
        onPress={() =>
          status.isPlaying
            ? video.current.pauseAsync()
            : video.current.playAsync()
        }
      >
        <View>
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: postData.video,
            }}
            resizeMode="cover"
            isLooping
            shouldPlay
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />

          <View style={styles.bottomContainer}>
            <View style={styles.right}>
              <View style={styles.profilePicContainer}>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri: postData.user.profilePic,
                  }}
                />
              </View>
              <View style={styles.iconContainer}>
                <AntDesign name="heart" size={40} color="white" />
                <Text style={styles.statsLabel}>{postData.likes}</Text>
              </View>
              <View style={styles.iconContainer}>
                <FontAwesome name="commenting" size={40} color="white" />
                <Text style={styles.statsLabel}>{postData.comments}</Text>
              </View>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={40}
                  color="white"
                />
                <Text style={styles.statsLabel}>{postData.shares}</Text>
              </View>
            </View>

            <View style={styles.bottom}>
              <View>
                <Text style={styles.handle}>@{postData.user.username}</Text>
                <Text style={styles.desc}>{postData.desc}</Text>
                <View style={styles.songRow}>
                  <Ionicons
                    name="musical-notes-sharp"
                    size={24}
                    color="white"
                  />
                  <Text style={styles.songName}>{postData.songName}</Text>
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={{
                  uri: postData.songImage,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
