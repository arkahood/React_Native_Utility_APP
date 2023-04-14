import { Text, View } from "react-native";

const WeatherResult = ({ route }) => {
    const { data } = route.params;

    return (
        <View>
            <Text>{data}</Text>
        </View>
    );
};

export default WeatherResult;
