import React, { useEffect } from "react";
import * as Font from "expo-font";
import { View, ActivityIndicator } from "react-native";
import { Container } from "native-base";
import Tab from "./src/screens/Tab";

export default function App() {
  const [loading, setLoading] = React.useState(true);

  const loadFont = async () => {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      // Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    setLoading(false);
  };

  useEffect(() => {
    loadFont();
  });

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else
    return (
      <Container>
        <Tab />
      </Container>
    );
}
