import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Inbox from "../screens/Inbox";
import Profile from "../screens/Profile";
import Upload from "../screens/Upload";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function HomeBottomTabNavigatior({ route }) {
  console.log(route);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#000" },
        tabBarActiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search-sharp" : "search-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Uplaod"
        component={Upload}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "cloud-upload-sharp" : "cloud-upload-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={Inbox}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={focused ? "message-minus" : "message-minus-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person-sharp" : "person-outline"}
              size={24}
              color="white"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
