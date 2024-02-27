import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

function SplashScreen({ splashScreen }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (splashScreen) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: true,
      }).start();
    }
  }, [splashScreen]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity: fadeAnim }}>
        <Image
          source={{
            uri: "https://64.media.tumblr.com/a1e87d2030a73aee16661e8807da6c1d/tumblr_mkhnmmFwaA1rxvkeso1_500.gif",
          }}
          style={{ width: 280, height: 100 }}
        />
        <Text style={{ textAlign: "center", margin: 10, fontSize: 17 }}>
          Bring Pokemon To This Screen
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SplashScreen;
