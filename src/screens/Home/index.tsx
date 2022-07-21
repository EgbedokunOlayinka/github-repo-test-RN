import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { HomeStackParamList } from "../../types/stack";
import ProfileScreen from "./profile.screen";
import ReposScreen from "./repos.screen";
import StarredScreen from "./starred.screen";
import { getHeaderTitle } from "@react-navigation/elements";
import { Text, TouchableOpacity } from "react-native";
import ProfileHeader from "../../components/ProfileHeader";
import ReposHeader from "../../components/ReposHeader";
import StarredHeader from "../../components/StarredHeader";

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerBackVisible: false,
        headerLeft: () => <></>,
      }}
      initialRouteName={"Profile"}
    >
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: (props) => <ProfileHeader />,
        }}
      />
      <Stack.Screen
        name="Repos"
        component={ReposScreen}
        options={{
          headerTitle: (props) => <ReposHeader />,
        }}
      />
      <Stack.Screen
        name="Starred"
        component={StarredScreen}
        options={{
          headerTitle: (props) => <StarredHeader />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
