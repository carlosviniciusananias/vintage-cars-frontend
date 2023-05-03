import React from "react";
import { StyleSheet, View } from "react-native";

export default function Sample() {
  return (
    <View style={styles.container}>
      <h1>NEW</h1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
});
