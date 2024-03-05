import React, { useEffect } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../redux/global/action";

function DetailInformation({ route, navigation }) {
  const dispatch = useDispatch();
  const { pokemonId } = route.params;
  const { pokemonbyid } = useSelector((state) => state.reducerGlobal);

  useEffect(() => {
    dispatch(getPokemonById(pokemonId));
  }, [pokemonId]);

  return (
    <View style={styles.container}>
      
      <View style={styles.headerContainer}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.textButtonStyle}>
            Name of Pokemon: {pokemonbyid.name}
          </Text>
          <Text style={styles.textButtonStyle}>Id of Pokemon: {pokemonId}</Text>
        </Pressable>
      </View>

      <ScrollView>
        <View style={{ margin: 10 }}>
          <Text>Abilities: </Text>
          {pokemonbyid.abilities.map((res, index) => {
            return <Text key={index}>{res.ability.name}</Text>;
          })}
        </View>
        <View style={{ margin: 10 }}>
          <Text>Types: </Text>
          {pokemonbyid.types.map((res, index) => {
            return <Text key={index}>{res.type.name}</Text>;
          })}
        </View>
        <View style={{ margin: 10 }}>
          <Text>Stats: </Text>
          {pokemonbyid.stats.map((res, index) => {
            return (
              <>
                <Text>{res.stat.name}</Text>
                <Text>{res.base_stat}</Text>
                <Text>{res.effort}</Text>
              </>
            );
          })}
        </View>
      </ScrollView>

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
  backButton: {
    backgroundColor: "black",
    alignItems: "center",
    marginRight: "auto",
    marginLeft: "auto",
    justifyContent: "center",
  },
  textButtonStyle: {
    color: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 24,
  },
});

export default DetailInformation;
