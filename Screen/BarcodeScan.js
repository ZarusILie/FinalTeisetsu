import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from "react-native";
import MainButton from "../Component/MainButton";
import TopBar from "../Component/TopBar";
// import { BarCodeScanner } from "expo-barcode-scanner";
import { CameraView, Camera } from "expo-camera/next";
import { useState } from "react";

const BarcodeScan = ({ navigation }) => {
  const [scanned, setScanned] = useState(false);
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    navigation.navigate("ScanResultQr", { scannedData: data });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ["qr", "pdf417"],
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <TouchableOpacity onPress={() => setScanned(false)}>
        <View style={{ alignItems: "center" }}>
          <MainButton buttontext={"Tap to Scan Again"} />
        </View>
      </TouchableOpacity>
      )}
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

export default BarcodeScan;
