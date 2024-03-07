// Packages
import { useState } from "react";
import { Pressable, StyleSheet, TextInput } from "react-native";
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
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Trumps</Text>
      <View>
        {players.map((player: string, index: number) => (
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
        ))}
      </View>
      <View>
        <Button title="Add Player" onPress={() => console.log("Start Game")} />
        <Button title="Start Game" onPress={() => console.log("Start Game")} />
      </View>
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
    paddingHorizontal: 50,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#6495ED",
  },
  title: {
    fontSize: 40,
    color: "#FFFFFF",
  },
  input: {
    fontSize: 24,
    marginVertical: 10,
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
});

export default App;
