import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeBottomTabNavigatior from "./homeBottomTabNavigator";

const RootStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name="HomeStack"
          component={HomeBottomTabNavigatior}
        />
        <RootStack.Screen name="CreatePost" component={CreatePost} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
