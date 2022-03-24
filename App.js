import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Navigation from "./src/navigation";
import { StatusBar } from "expo-status-bar";
import Amplify, { API, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { useEffect } from "react";
import { getUser } from "./src/graphql/queries";
import { createUser } from "./src/graphql/mutations";

Amplify.configure(awsconfig);
Amplify.configure(awsExports);

const randomImage = [
  "https://www.pngitem.com/pimgs/m/421-4213036_avatar-hd-png-download.png",
  "https://media.istockphoto.com/photos/red-apple-with-leaf-picture-id683494078?k=20&m=683494078&s=170667a&w=0&h=HHnGEokgWVCLhAnBG4PNQ_Q0xVO9FZMa6iCJdAKPPbc=",
];

function getRandomImage() {
  return randomImage[Math.floor(Math.random() * randomImage.length)];
}

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      // retrieve current user info in cognito
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!userInfo) return;
      //check in database
      const fetchedUser = await API.graphql(
        graphqlOperation(getUser, { id: userInfo.attributes.sub })
      );

      if (fetchedUser.data.getUser) {
        console.log("user info already exists in database");
      }
      // if not in database, need create
      const newUser = {
        id: userInfo.attributes.sub,
        username: userInfo.username,
        email: userInfo.attributes.email,
        userImageUri: getRandomImage(),
      };
      await API.graphql(graphqlOperation(createUser, { input: newUser }));
    };

    fetchUser();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <Navigation />
    </SafeAreaView>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: { flex: 1 },
});
