import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import NfcManager, { NfcTech } from "react-native-nfc-manager";
import MainButton from "../Component/MainButton";
import { TouchableOpacity } from "react-native-gesture-handler";

const NFCScanScreen = ({ navigation }) => {
  const [nfcData, setNfcData] = useState(null);

  useEffect(() => {
    NfcManager.start();

    return () => {
      NfcManager.stop();
    };
  }, []);

  const readNdef = async () => {
    try {
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      // console.warn("Tag found", tag);
      setNfcData(tag.id);
      navigation.navigate("ScanResult", { scannedData: tag.id });
    } catch (ex) {
      // console.warn("Oops!", ex);
    } finally {
      NfcManager.cancelTechnologyRequest();
    }
  };

  return (
    <View style={styles.container}>
      <Text>NFC Scan Screen</Text>
      <TouchableOpacity onPress={() => readNdef()}>
        <View style={{ alignItems: "center" }}>
          <MainButton buttontext={"Scan"} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NFCScanScreen;
