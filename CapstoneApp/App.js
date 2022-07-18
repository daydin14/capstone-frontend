import { StatusBar } from "expo-status-bar";
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  SafeAreaView,
} from "react-native";

import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "olive",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
