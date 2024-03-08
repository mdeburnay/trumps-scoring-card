// Packages
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Utils
import { screenOptions } from "./utils/screenOptions";

type RootStackParamList = {
  Home: undefined;
};

type IButtonProps = {
  onPress: () => void;
  title: string;
};

const Home = () => {
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
      <KeyboardAvoidingView keyboardVerticalOffset={-550}>
        <ScrollView>
          <Text style={styles.title}>Trumps</Text>
          <View>
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
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Add Player" onPress={() => addPlayer(players)} />
            <Button title="Remove Player" onPress={() => removePlayer()} />
            <Button
              title="Start Game"
              onPress={() => console.log("Start Game")}
            />
          </View>
        </ScrollView>
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
