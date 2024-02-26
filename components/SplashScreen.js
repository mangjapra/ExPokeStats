import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://64.media.tumblr.com/a1e87d2030a73aee16661e8807da6c1d/tumblr_mkhnmmFwaA1rxvkeso1_500.gif",
        }}
        style={{ width: 280, height: 100 }}
      />
      <Text style={{ textAlign: "center", margin: 10, fontSize:17 }}>Bring Pokemon To This Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default SplashScreen;
