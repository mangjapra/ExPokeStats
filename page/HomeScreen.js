import React, { useEffect, useRef } from "react";
import {
  Animated,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import CardComponent from "../components/CardComponent";
import { useDispatch, useSelector } from "react-redux";
import { getListPokemon } from "../redux/global/action";

function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const { listpokemon } = useSelector((state) => state.reducerGlobal);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    dispatch(getListPokemon());
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Animated.View style={{ opacity: fadeAnim }}>
          {listpokemon?.map((res, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate("Detail")}
              >
                <CardComponent name={res.name} number={index + 1} />
              </TouchableOpacity>
            );
          })}
        </Animated.View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    padding: 10,
  },
});

export default HomeScreen;
