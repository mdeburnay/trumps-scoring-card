// Packages
import * as React from "react";
import { StyleSheet, TextInput } from "react-native";
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
    <Text style={styles.title}>Trumps</Text>
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#FFFFFF"
        placeholder="Player 1 Name"
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#FFFFFF"
        placeholder="Player 2 Name"
      />
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
    paddingHorizontal: 50,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#6495ED",
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  inputContainer: {},
  input: {
    fontSize: 24,
    color: "#FFFFFF",
  },
});

export default App;
