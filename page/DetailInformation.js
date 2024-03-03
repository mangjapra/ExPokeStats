import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

function DetailInformation() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "black",
    paddingTop: 240,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 24,
  },
});

export default DetailInformation;
