import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, Text, TextInput, View } from "react-native";
import SearchScreen from "./SearchScreen";
import WeatherResult from "./WeatherResult";

const stack = createNativeStackNavigator();

const WeatherScreen = () => {
    return (
        <stack.Navigator>
            <stack.Screen
                name="Weather"
                component={SearchScreen}
            ></stack.Screen>
            <stack.Screen
                name="WeatherResult"
                component={WeatherResult}
            ></stack.Screen>
        </stack.Navigator>
    );
};

export default WeatherScreen;
