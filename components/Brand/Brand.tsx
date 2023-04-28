import React from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";

type Props = {
  height?: number | string;
  width?: number | string;
  mode?: "contain" | "cover" | "stretch" | "repeat" | "center";
};

const Brand = ({ height, width, mode }: Props) => {
  return (
    <View testID={"brand-img-wrapper"} style={{ height, width }}>
      <Image
        testID={"brand-img"}
        style={styles.image}
        source={require("../../assets/img/brand.png")}
        resizeMode={mode}
      />
      <Text>Lorem ipsum dolor ipsum dolor</Text>
      <Button
        title="Lorem ipsum"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
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
