import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import MainButton from "../Component/MainButton";
import TopBar from "../Component/TopBar";
import PaymentService from "../api/Services/account";
import { useEffect, useState } from "react";

const PaymentSuccessScreen = ({ navigation, route }) => {
  const { totalAmmount, scannedData } = route.params;
  const [account, setAccount] = useState();
  useEffect(() => {
    const fetchDataAccount = async () => {
      try {
        const responseAccountData = await PaymentService.create(scannedData);
        console.log(responseAccountData.data);
        setAccount(responseAccountData.data);
        // console.log(account);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataAccount();
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          gap: 24,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 96,
        }}
      >
        <Image
          style={{ width: 320, height: 320 }}
          source={require("../assets/checkbox-circle.png")}
        />
        <View
          style={{
            width: "100%",
            paddingHorizontal: 16,
            paddingVertical: 24,
            gap: 16,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 32,
              fontWeight: 500,
              paddingBottom: 8,
            }}
          >
            Pembayaran berhasil!
          </Text>
          <View style={styles.detailContainer}>
            <Text style={[styles.textDetail, { fontSize: 20 }]}>
              Saldo Terpotong:{" "}
            </Text>
            <Text style={[styles.textDetail, { fontWeight: 500 }]}>
              {totalAmmount}
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={[styles.textDetail, { fontSize: 20 }]}>
              Sisa Saldo:{" "}
            </Text>
            <Text style={[styles.textDetail, { fontWeight: 500 }]}>
              {account ? `Rp${account.tapCashBalance}` : "Loading..."}
            </Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View style={styles.button}>
          <Text style={{ fontSize: 18, color: "#005E68", fontWeight: "600" }}>
            Back to home
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    backgroundColor: "#005E68",
    paddingVertical: 16,
  },

  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    alignItems: "baseline",
  },
  textDetail: {
    color: "#fff",
    fontSize: 24,
  },

  button: {
    width: "83%",
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    marginBottom: 20,
  },
});

export default PaymentSuccessScreen;
