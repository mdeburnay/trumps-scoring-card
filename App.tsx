// Packages
import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Utils
import { screenOptions } from "./utils/screenOptions";

type RootStackParamList = {
  Home: undefined;
};

const Home = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.text}>Trumps</Text>
    </View>
  </SafeAreaView>
);

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen name="Home" component={Home} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    backgroundColor: "#6495ED",
  },
  text: {
    fontSize: 40,
    color: "#FFFFFF",
  },
});

export default App;
