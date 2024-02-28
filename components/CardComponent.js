import React from "react";
import { StyleSheet, Text, View } from "react-native";

function CardComponent({
  name,
  number
}) {
  return (
      <View>
        <Text style={styles.title}>{name} {number}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default CardComponent;
