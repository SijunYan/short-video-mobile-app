import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { useNavigation } from "@react-navigation/native";

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [cameraRef, setCameraRef] = useState(null);
  const [recording, setRecording] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onRecord = async () => {
    if (!recording) {
      setRecording(true);
      let video = await cameraRef.recordAsync();
      console.log("video", video);
      navigation.navigate("CreatePost", { videoUri: video.uri });
    } else {
      setRecording(false);
      cameraRef.stopRecording();
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={type}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <TouchableOpacity
        onPress={onRecord}
        style={recording ? styles.recordingButton : styles.stopButton}
      ></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  recordingButton: {
    alignSelf: "center",
    height: 50,
    width: 50,
    backgroundColor: "red",
    marginVertical: 10,
    borderRadius: 25,
  },
  stopButton: {
    alignSelf: "center",
    height: 30,
    width: 30,
    backgroundColor: "red",
    marginVertical: 20,
    borderRadius: 3,
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: "transparent",
    flexDirection: "row",
    margin: 20,
  },
  button: {
    flex: 0.1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});
