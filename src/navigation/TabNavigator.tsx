import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { ExploreIcon, HomeIcon, NotificationIcon, ProfileIcon } from "../icons";
import HomeStack from "../screens/Home";
import theme from "../theme";

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: theme.colors.customBlue,
          tabBarInactiveTintColor: theme.colors.customGrey,
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            paddingBottom: 6,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Home") {
              return <HomeIcon color={color} size={size} />;
            }

            if (route.name === "Notifications") {
              return <NotificationIcon color={color} size={size} />;
            }

            if (route.name === "Explore") {
              return <ExploreIcon color={color} size={size} />;
            }

            if (route.name === "Profile") {
              return <ProfileIcon color={color} size={size} />;
            }

            return null;
          },
        })}
      >
        <BottomTabs.Screen name="Home" component={HomeStack} />
        <BottomTabs.Screen name="Notifications">{() => <></>}</BottomTabs.Screen>
        <BottomTabs.Screen name="Explore">{() => <></>}</BottomTabs.Screen>
        <BottomTabs.Screen name="Profile">{() => <></>}</BottomTabs.Screen>
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;
