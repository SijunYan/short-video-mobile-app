import { useState, useRef, useCallback } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { postsData } from "../../../data/postsData.js";
import Post from "../../components/Post";
import { Viewport } from "@skele/components";

export default function Home() {
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
