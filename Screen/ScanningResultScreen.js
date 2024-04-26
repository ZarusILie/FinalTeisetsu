import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MainButton from "../Component/MainButton";
import TopBar from "../Component/TopBar";
// import { BarCodeScanner } from "expo-barcode-scanner";

const ScanningResultScreen = ({ route, navigation }) => {
  const { scannedData } = route.params;
  return (
    <View style={styles.container}>
      <TopBar title="Scanning Success" />
      <View style={{ alignItems: "center", gap: 8 }}>
        <Text
          style={{ textAlign: "center", fontWeight: "500", color: "#626262" }}
        >
          TapCash Card ID:
        </Text>
        <Text style={{ textAlign: "center", fontSize: 20 }}>{scannedData}</Text>
      </View>
      <View
        style={{
          width: "110%",
          paddingVertical: 20,
          paddingHorizontal: 16,
          backgroundColor: "#FFF",
          alignItems: "center",
          borderTopWidth: 1,
          borderTopColor: "#F0F1F5",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("PaymentForm")}>
          <View>
            <MainButton buttontext={"Get Data"} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
});

export default ScanningResultScreen;
