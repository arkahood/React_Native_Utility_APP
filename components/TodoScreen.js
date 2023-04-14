import {
    Button,
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    useColorScheme,
    View,
} from "react-native";
import Todo from "./Todo";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EachTodo from "./EachTodo";

const stack = createNativeStackNavigator();

const TodoScreen = () => {
    return (
        <stack.Navigator>
            <stack.Screen
                name="Home"
                // component={Todo}
                options={{ title: "TODO APP" }}
            >
                {(props) => <Todo {...props} />}
            </stack.Screen>
            <stack.Screen
                name="Expand"
                options={{ title: "TODO APP" }}
                initialParams={{ title: "Arka", des: "Not" }}
            >
                {(props) => <EachTodo {...props} />}
            </stack.Screen>
        </stack.Navigator>
    );
};

function Test({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Button
                title="Change"
                onPress={() => navigation.navigate("Test2")}
            ></Button>
        </View>
    );
}
function Test2({ navigation }) {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>Working</Text>
        </View>
    );
}

export default TodoScreen;
