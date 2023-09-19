import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Counter, Pokedex } from "../pages";

const Tab = createMaterialTopTabNavigator();

export function TopTabRoutes() {
  return (
    <Tab.Navigator screenOptions={{
        tabBarStyle: {
            backgroundColor: "#181818",
        },
        tabBarLabelStyle: {
            color: "#fff"
        }
    }}>
      <Tab.Screen name="Pokedex" component={Pokedex} options={{ title: "Pokedex" }} />
      <Tab.Screen name="Counter" component={Counter} options={{ title: "Counter" }} />
    </Tab.Navigator>
  );
}