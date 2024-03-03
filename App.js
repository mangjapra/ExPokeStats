import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./page/HomeScreen";
import { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import DetailInformation from "./page/DetailInformation";
import { Provider } from "react-redux";
import { allReducer } from "./redux";
import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

const Stack = createNativeStackNavigator();

export default function App() {
  const [splashScreen, setSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashScreen(false);
    }, 5000);
  }, []);

  if (splashScreen) {
    return <SplashScreen splashScreen={splashScreen} />;
  }

  const store = configureStore(
    {
      reducer: allReducer,
      middleware: () => {
        return [thunk]
      },
    },
  );
  // store.subscribe(() => console.log("subscribe: ", store.getState()));

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Expo Pokemon Status" }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailInformation}
            options={{ title: "Detail Information" }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
