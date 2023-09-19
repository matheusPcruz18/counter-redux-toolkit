import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TopTabRoutes } from "./topTab.routes";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#181818",
        },
        headerTitleStyle: {
          color: "#fff",
        },
      }}
    >
      <Stack.Screen
        name={"TopTab"}
        component={TopTabRoutes}
        options={{
          headerShown: true,
          title: "React Native Deep Concepts",
        }}
      />
    </Stack.Navigator>
  );
}