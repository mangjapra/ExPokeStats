import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SvgUri } from 'react-native-svg';

function CardComponent({
  name,
  imageSource,
}) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <SvgUri height={125} width={125} uri={ imageSource } /> 
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: '500',
    marginBottom: 'auto',
    marginTop: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    color: 'white',
  },
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#4AB05C',
    margin: 10,
    borderRadius: 8,
  }
});

export default CardComponent;
