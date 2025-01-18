// CORE IMPORTS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import { Home, Game } from "./screens";

// UTILS
import { screenOptions } from "./utils";

type RootStackParamList = {
  Home: undefined;
  Game: undefined;
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

export default App;
