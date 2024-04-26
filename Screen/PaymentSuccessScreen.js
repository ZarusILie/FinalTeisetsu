import { StyleSheet, Text, View, Image } from "react-native";
import MainButton from "../Component/MainButton";
import TopBar from "../Component/TopBar";

const PaymentSuccessScreen = ({ navigation }) => {
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
              {" "}
              Rp.3000
            </Text>
          </View>
          <View style={styles.detailContainer}>
            <Text style={[styles.textDetail, { fontSize: 20 }]}>
              Sisa Saldo:{" "}
            </Text>
            <Text style={[styles.textDetail, { fontWeight: 500 }]}>
              Rp24.000
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <Text style={{ fontSize: 18, color: "#005E68", fontWeight: "600" }}>
          Back to home
        </Text>
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
