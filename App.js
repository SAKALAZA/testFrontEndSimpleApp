import { StatusBar } from "expo-status-bar";
import React from "react";

import Body from "./screen/Body";
import Profile from "./screen/Profile";
import Chat from "./screen/Chat";
import Shop from "./screen/Shop";
import Tag from "./screen/Tag";

import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTap = createMaterialBottomTabNavigator();

export default function App() {
  const createHomeStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Body}
          options={{
            title: " Home ",
            headerStyle: { backgroundColor: "#FA8128" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    );
  };
  const createChatStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            title: " Messages ",
            headerStyle: { backgroundColor: "#FA8128" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    );
  };
  const createShopStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="My Order"
          component={Shop}
          options={{
            title: " My Order ",
            headerStyle: { backgroundColor: "#FA8128" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    );
  };
  const createTagStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Tag"
          component={Tag}
          options={{
            title: " Tag ",
            headerStyle: { backgroundColor: "#FA8128" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    );
  };
  // const createProfileStack = () => {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="Profile"
  //         component={Profile}
  //         options={{
  //           title: " Profile ",
  //           headerStyle: { backgroundColor: "#FA8128" },
  //           headerTintColor: "white",
  //         }}
  //       />
  //     </Stack.Navigator>
  //   );
  // };

  return (
    <NavigationContainer>
      <MaterialBottomTap.Navigator
        activeColor="#fff"
        barStyle={{
          backgroundColor: "#FA8128",
          paddingBottom: 10,
        }}
      >
        <MaterialBottomTap.Screen
          name="Home"
          component={createHomeStack}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <View
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Entypo
                  style={{ padding: 2 }}
                  name="home"
                  size={26}
                  color="#fff"
                  onPress={() => Alert.alert()}
                />
              </View>
            ),
          }}
        />
        <MaterialBottomTap.Screen
          name="Chat"
          component={createChatStack}
          options={{
            tabBarLabel: "Messages",
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={26}
                color="#fff"
                onPress={() => Alert.alert("")}
              />
            ),
          }}
        />
        <MaterialBottomTap.Screen
          name="My Order"
          component={createShopStack}
          options={{
            tabBarLabel: "My Order",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="shopping-cart" size={26} color="#fff" />
            ),
          }}
        />
        <MaterialBottomTap.Screen
          name="Tag"
          component={createTagStack}
          options={{
            tabBarLabel: "Tag",
            tabBarIcon: ({ color }) => (
              <AntDesign name="tags" size={26} color="#fff" />
            ),
          }}
        />
        <MaterialBottomTap.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons
                name="person"
                size={26}
                color="#fff"
                onPress={() => Alert.alert("")}
              />
            ),
          }}
        />
      </MaterialBottomTap.Navigator>

      {/* <Drawer.Navigator>
         <Drawer.Screen name="Home" children={createHomeStack} />
         <Drawer.Screen name="Chat" component={createBottomTap} />
       
       </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  TopBar: {
    justifyContent: "flex-start",
    width: "100%",
    height: 60,
    backgroundColor: "#FC6A03",
    justifyContent: "center",
    alignItems: "center",
  },
});
