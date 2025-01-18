// CORE IMPORTS
import { SafeAreaView, View, Text } from "react-native";

// STYLES
import { styles } from "../styles";

export const Game = ({ route, navigation }: any) => {
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
