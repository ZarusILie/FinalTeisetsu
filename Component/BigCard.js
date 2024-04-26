import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const BigCard = ({ cardText, imagesource }) => {
  return (
    <View style={styles.bigCard}>
      <Image source={imagesource} style={{ width: 64, height: 64 }} />
      <Text style={{ fontSize: 16, fontWeight: 500, color: "#005E68" }}>
        {cardText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bigCard: {
    width: "100%",
    gap: 8,
    borderRadius: 12,
    backgroundColor: "#F5F9FA",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    paddingVertical: 32,
    borderColor: "#EEF5F6",
    borderWidth: 1,
  },
});

export default BigCard;
