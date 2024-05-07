import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import EmoneyOptionScreen from "./Screen/EmoneyOptionScreen";
import PaymentFormScreen from "./Screen/PaymentFormScreen";
import ScanningResultScreen from "./Screen/ScanningResultScreen";
import PaymentSuccessScreen from "./Screen/PaymentSuccessScreen";
import ScanningResultQrScreen from "./Screen/ScanningResultQrScreen";
import PaymentFormQrScreen from "./Screen/PaymentFormQrScreen";
import { NavigationContainer } from "@react-navigation/native";
import BarcodeScan from "./Screen/BarcodeScan";
import NFCScanScreen from "./Screen/NfcScan";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={EmoneyOptionScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BarcodeScan"
          component={BarcodeScan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NFCScan"
          component={NFCScanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScanResult"
          component={ScanningResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScanResultQr"
          component={ScanningResultQrScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentForm"
          component={PaymentFormScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PaymentQrForm"
          component={PaymentFormQrScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={PaymentSuccessScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});