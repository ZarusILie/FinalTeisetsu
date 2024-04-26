import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const MainButton = ({buttontext}) => {
  return (
    <View style={styles.button}>
      <Text style={{ fontSize: 16, color: "white" }}>{buttontext}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "75%",
    borderRadius: 12,
    backgroundColor: "#FF6600",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 18,
    paddingVertical: 16,
  },
});

export default MainButton;
