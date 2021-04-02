import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

export class Shop extends Component {
  render() {
    return (
      <View style={styles.Body}>
        <FontAwesome5 name="shopping-cart" size={50} color="#DDDDDD" />
        <Text style={{ marginTop: 5 }}> You haven't place any orders yet </Text>
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

export default Shop;
