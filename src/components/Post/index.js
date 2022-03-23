import * as React from "react";
import {
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import styles from "./styles";
import {
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { Viewport } from "@skele/components";

const ViewportAwareVideo = Viewport.Aware(Video);

export default function Post(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  //manipulate post data inside component
  const [postData, setPostData] = React.useState(props.postData);
  const [toPaly, setToPlay] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    let likeAdd = !isLiked ? 1 : -1;
    setPostData({ ...postData, likes: postData?.likes + likeAdd });
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.videoContainer}
        onPress={() => (status.isPlaying ? setToPlay(false) : setToPlay(true))}
      >
        <View>
          <ViewportAwareVideo
            style={styles.video}
            source={{
              uri: postData?.videoUri,
            }}
            resizeMode="cover"
            isLooping
            shouldPlay={toPaly}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            onViewportEnter={() => setToPlay(true)}
            onViewportLeave={() => setToPlay(false)}
          />

          <View style={styles.bottomContainer}>
            <View style={styles.right}>
              <View style={styles.profilePicContainer}>
                <Image
                  style={styles.profilePic}
                  source={{
                    uri: postData.user?.userImageUri,
                  }}
                />
              </View>
              <TouchableOpacity
                style={styles.iconContainer}
                onPress={handleLike}
              >
                <AntDesign
                  name={isLiked ? "heart" : "hearto"}
                  size={40}
                  color={isLiked ? "red" : "white"}
                />
                <Text style={styles.statsLabel}>{postData?.likes}</Text>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <FontAwesome name="commenting" size={40} color="white" />
                <Text style={styles.statsLabel}>{postData?.comments}</Text>
              </View>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="share-outline"
                  size={40}
                  color="white"
                />
                <Text style={styles.statsLabel}>{postData?.shares}</Text>
              </View>
            </View>

            <View style={styles.bottom}>
              <View>
                <Text style={styles.handle}>@{postData.user?.username}</Text>
                <Text style={styles.desc}>{postData?.desc}</Text>
                <View style={styles.songRow}>
                  <Ionicons
                    name="musical-notes-sharp"
                    size={24}
                    color="white"
                  />
                  <Text style={styles.songName}>{postData?.songName}</Text>
                </View>
              </View>

              <Image
                style={styles.songImage}
                source={{
                  uri: postData.song?.songImageUri,
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
