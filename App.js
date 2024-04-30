import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EmoneyOptionScreen from "./Screen/EmoneyOptionScreen";
import PaymentFormScreen from "./Screen/PaymentFormScreen";
import ScanningResultScreen from "./Screen/ScanningResultScreen";
import PaymentSuccessScreen from "./Screen/PaymentSuccessScreen";
import { NavigationContainer } from "@react-navigation/native";
import BarcodeScan from "./Screen/BarcodeScan";
import NFCScanScreen from "./Screen/NFCScan";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={EmoneyOptionScreen} />
        <Stack.Screen name="BarcodeScan" component={BarcodeScan} />
        <Stack.Screen name="NFCScan" component={NFCScanScreen} />
        <Stack.Screen name="ScanResult" component={ScanningResultScreen} />
        <Stack.Screen name="PaymentForm" component={PaymentFormScreen} />
        <Stack.Screen name="Success" component={PaymentSuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
});
