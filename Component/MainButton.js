import { StyleSheet, View, Text } from "react-native";

const MainButton = ({ buttontext }) => {
  return (
    <View style={styles.button}>
      <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>
        {buttontext}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "150%",
    borderRadius: 12,
    backgroundColor: "#FF6600",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
});

export default MainButton;
