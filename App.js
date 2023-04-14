import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import TodoScreen from "./components/TodoScreen";
import WeatherScreen from "./components/WeatherScreen";

const Tab = createBottomTabNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="TODO" component={TodoScreen} />
                <Tab.Screen name="weather" component={WeatherScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body: {
        flex: 10,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    bottomNavigation: {
        flex: 1,
        //position: "absolute",
        // display: "flex",
        borderTopWidth: 1,

        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
});
