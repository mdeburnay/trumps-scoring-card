import { useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  Text,
} from "react-native";

// COMPONENTS
import { Button } from "@components";

// STYLES
import { styles } from "@styles";

export const Home = ({ navigation }: any) => {
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
