import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export class Tag extends Component {
  render() {
    return (
      <View style={styles.Body}>
        <AntDesign name="warning" size={50} color="#DDDDDD" />
        <Text style={{ marginTop: 5 }}> Comming Soon </Text>
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

export default Tag;
