import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

export class Chat extends Component {
  render() {
    return (
      <View style={styles.Body}>
        <MaterialIcons name="sms-failed" size={50} color="#DDDDDD" />
        <Text style={{ marginTop: 5 }}> There are not messages yet </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Chat;
