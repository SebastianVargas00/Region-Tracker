import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Map from "./screens/Map";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => null }}
        ></Stack.Screen>
        <Stack.Screen name="Map" component={Map}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
