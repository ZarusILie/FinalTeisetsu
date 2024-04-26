import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import MainButton from "../Component/MainButton";
import { TouchableOpacity } from "react-native";
import TopBar from "../Component/TopBar";

const PaymentFormScreen = ({ route, navigation }) => {
  const [number, onChangeNumber] = React.useState("");
  return (
    <View style={styles.container}>
      <TopBar title="Payment Detail" />
      <View style={{ gap: 16, width: "100%", flex: 1 }}>
        <View
          style={{
            marginHorizontal: 16,
            width: "90%",
            gap: 8,
            backgroundColor: "#F5F9FA",
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 24,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 18, paddingBottom: 8 }}>
            Emoney Information:
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Text style={{ color: "#626262" }}>TapCash Card ID:</Text>
            <Text style={{ color: "#005E68", fontSize: 18, fontWeight: "500" }}>
              1234 5678 9012 3456
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Text style={{ color: "#626262" }}>Current Ballance:</Text>
            <Text style={{ color: "#005E68", fontSize: 18, fontWeight: "500" }}>
              Rp24.000
            </Text>
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            width: "90%",
            gap: 6,
            backgroundColor: "#F5F9FA",
            borderRadius: 16,
            paddingHorizontal: 16,
            paddingVertical: 24,
          }}
        >
          <Text style={{ fontWeight: "500", fontSize: 18 }}>
            Payment Amount
          </Text>

          <TextInput
            style={{
              fontSize: 14,
              borderBottomColor: "#D9D9D9",
              borderBottomWidth: 1,
              paddingVertical: 4,
            }}
            // style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Nominal pembayaran"
            keyboardType="numeric"
          />
        </View>
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
        <MainButton
          buttontext={"Pay now"}
          onPress={() => navigation.navigate("Success")}
        />
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

export default PaymentFormScreen;
