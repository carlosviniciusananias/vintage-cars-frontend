import React from "react";
import { StyleSheet, View } from "react-native";
import { Brand } from "../components";

export default function Main() {
  return (
    <View style={styles.container}>
      <Brand />
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

  title: {
    fontSize: 24,
    fontWeight: 600,
  },
});
