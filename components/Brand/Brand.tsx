import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const Brand = () => {
  return (
    <View testID={"brand-img-wrapper"}>
      <Image
        testID={"brand-img"}
        style={styles.image}
        source={require("../../assets/img/vintage-cars-logo.jpg")}
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
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 500,
  },
});

export default Brand;
