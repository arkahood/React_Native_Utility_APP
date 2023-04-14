import { useState } from "react";
import { Button, TextInput, View, Text, Alert } from "react-native";

const SearchScreen = ({ navigation }) => {
    const [city, setCity] = useState("");

    const handleSearch = () => {
        Alert.alert(`Your entered city is ${city}`);
        setCity("");
        navigation.navigate("WeatherResult", {
            data: "HIII",
        });
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
            }}
        >
            <TextInput
                placeholder="Enter City"
                style={{ margin: 20 }}
                value={city}
                onChangeText={(name) => setCity(name)}
            ></TextInput>
            <Button
                title="Search"
                color={"black"}
                onPress={() => handleSearch()}
            />
        </View>
    );
};

export default SearchScreen;
