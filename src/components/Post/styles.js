import { StyleSheet, Dimensions } from "react-native";

export default styles = StyleSheet.create({
  container: {
    width: "100%",
    // Dimensions.get("screen").height
    // or 'window' : have gap at bottom on android
    // or 100%
    height: Dimensions.get("screen").height - 45,
  },
  videoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 99,
  },
  video: {
    position: "absolute",
    top: 25,
    left: 0,
    bottom: 0,
    right: 0,
  },
  //
  bottomContainer: {
    height: "100%",
    justifyContent: "flex-end",
  },
  //right
  right: {
    alignSelf: "flex-end",
    height: 300,
    justifyContent: "space-between",
    marginRight: 5,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: "white",
  },

  iconContainer: { alignSelf: "center" },
  statsLabel: {
    color: "#fff",
    alignSelf: "center",
    fontSize: 16,
    fontWeight: "600",
    marginTop: 5,
  },

  //bottom
  bottom: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  handle: { color: "#fff", fontSize: 16, fontWeight: "600", marginBottom: 5 },
  desc: { color: "#fff", fontSize: 16, fontWeight: "200", marginBottom: 10 },
  songRow: { flexDirection: "row", alignItems: "center" },
  songName: { color: "#fff", fontSize: 16, fontWeight: "200", marginLeft: 5 },

  songImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#4c4c4c",
  },
});
