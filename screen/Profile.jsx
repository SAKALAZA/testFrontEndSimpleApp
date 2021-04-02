import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { max } from "react-native-reanimated";

export class Profile extends Component {
  render() {
    return (
      <View>
        <View style={styles.Box1}>
          <Ionicons
            name="person-circle-sharp"
            size={120}
            color="#fff"
            onPress={() => Alert.alert("Login First")}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Comming Soon")}
          >
            <Text style={{ color: "#FA8128" }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Alert.alert("Comming Soon")}
          >
            <Text style={{ color: "#FA8128" }}>Register</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ height: 500 }}>
          <View>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => Alert.alert("Comming Soon")}
            >
              <MaterialCommunityIcons
                name="truck-delivery"
                size={24}
                color="#FA8128"
              />
              <Text style={{ color: "Black", marginLeft: 40 }}>My Order</Text>
              <Text
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 170,
                  fontSize: 20,
                }}
              >
                {" "}
                {">"}{" "}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.button3}
              onPress={() => Alert.alert("Comming Soon")}
            >
              <Entypo name="address" size={24} color="#FA8128" />
              <Text style={{ color: "Black", marginLeft: 40 }}>Address</Text>
              <Text
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 177,
                  fontSize: 20,
                }}
              >
                {" "}
                {">"}{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Box1: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    backgroundColor: "#FA8128",
    flexDirection: "row",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    width: 90,
    marginRight: 20,
    marginLeft: 5,
  },
  button2: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 10,
    width: 350,
    marginRight: 15,
    marginLeft: 12,
    marginTop: 50,
  },
  button3: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 10,
    width: 350,
    marginRight: 15,
    marginLeft: 12,
    marginTop: 10,
  },
});

export default Profile;
