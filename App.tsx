// Packages
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Utils
import { screenOptions } from "./utils/screenOptions";

type RootStackParamList = {
  Home: undefined;
  Game: undefined;
};

type IButtonProps = {
  onPress: () => void;
  title: string;
};

const Game = ({ route, navigation }: any) => {
  const { players } = route.params;
  return (
    <SafeAreaView style={styles.gamesContainer}>
      <View>
        <Text style={styles.title}>Game</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
        {players.map((player: string, index: number) => {
          return (
            <Text style={{ fontSize: 18, color: "#FFFFFF" }} key={index}>
              {player}
            </Text>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const Home = ({ navigation }: any) => {
  const [players, setPlayers] = useState<string[]>(["", ""]);

  const addPlayer = (players: string[]) => {
    const newPlayers = [...players, ""];
    return setPlayers(newPlayers);
  };

  const removePlayer = () => {
    const newPlayers = [...players];

    newPlayers.length > 2 && newPlayers.pop();
    return setPlayers(newPlayers);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        enabled
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Bets</Text>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
          >
            {players.map((player: string, index: number) => (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => Keyboard.dismiss()}
              >
                <TextInput
                  key={index}
                  style={styles.input}
                  placeholder={`Player ${index + 1}`}
                  placeholderTextColor={"#FFFFFF"}
                  value={player}
                  onChangeText={(text) => {
                    const newPlayers = [...players];
                    newPlayers[index] = text;
                    setPlayers(newPlayers);
                  }}
                />
              </TouchableWithoutFeedback>
            ))}
          </ScrollView>
          <View style={styles.buttonContainer}>
            <Button title="Add Player" onPress={() => addPlayer(players)} />
            <Button title="Remove Player" onPress={() => removePlayer()} />
            <Button
              title="Start Game"
              onPress={() =>
                navigation.navigate("Game", {
                  players,
                })
              }
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={screenOptions}>
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Game" component={Game} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const Button = ({ onPress, title }: IButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ED",
    paddingVertical: 20,
  },
  gamesContainer: {
    flex: 1,
    backgroundColor: "#6495ED",
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
    textAlign: "center",
  },
  input: {
    fontSize: 24,
    marginVertical: 10,
    textAlign: "center",
    color: "#FFFFFF",
  },
  button: {
    margin: 10,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default App;
