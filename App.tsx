// CORE IMPORTS
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// SCREENS
import { Home } from "./screens/Home";
import { Game } from "./screens/Game";

// UTILS
import { screenOptions } from "./utils/screenOptions";

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
