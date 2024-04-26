import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MainButton from "../Component/MainButton";
import TopBar from "../Component/TopBar";
import BigCard from "../Component/BigCard";

const EmoneyOptionScreen = ({ navigation }) => {
  const imagePath1 = require("../assets/qr-code.png");
  const imagePath2 = require("../assets/nfc.png");

  return (
    <View style={styles.container}>
      <TopBar title="Payment Using Emoney" />
      <View style={{ gap: 20, paddingVertical: 180 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", textAlign: "center" }}>
          Emoney reading method:
        </Text>
        <View
          style={{ flexDirection: "row", gap: 16, justifyContent: "center" }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("BarcodeScan");
              console.log("tejab");
            }}
          >
            <View style={{ width: "100%" }}>
              <BigCard cardText={"QR Scanning"} imagesource={imagePath1} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("BarcodeScan")}>
            <View style={{ width: "100%" }}>
              <BigCard cardText={"NFC Tapping"} imagesource={imagePath2} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: "space-between",
    gap: 16,
    height: "100%",
  },
});

export default EmoneyOptionScreen;
