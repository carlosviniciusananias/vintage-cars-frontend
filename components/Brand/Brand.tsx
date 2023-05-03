import React from "react";
import { View, Image, Text, Pressable, StyleSheet } from "react-native";

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: "contain" | "cover" | "stretch" | "repeat" | "center";
  navigation?: unknown;
};

const Brand = ({ height, width, mode, navigation }: Props) => {
  const login = () => {
  };

  return (
    <View testID={"brand-img-wrapper"} style={{ height, width }}>
      <Image
        testID={"brand-img"}
        style={styles.image}
        source={require("../../assets/img/vintage-cars-logo.jpg")}
        resizeMode={mode}
      />
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        Lorem ipsum dolor ipsum dolor
      </Text>
      <Pressable style={styles.button} onPress={login}>
        <Text style={styles.text}>Access</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 500,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 10,
    elevation: 3,
    backgroundColor: "black",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Brand;
