import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TopBar = ({ title }) => {
    // const navigation = useNavigation();
  
    return (
      <View style={styles.topbar}>
        <TouchableOpacity
          // onPress={() => {
          //   navigation.goBack();
          // }}
        >
          <View style={{ marginLeft: "10%" }}>
            <Image style={{width:24, height:24}} source={require("../assets/arrow-left-line.png")} />
          </View>
        </TouchableOpacity>
        <Text style={{ alignContent:'center', fontSize: 16, fontWeight: 500 }}>{title}</Text>
        <View style={{marginRight:40}}></View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    topbar: {
      flexDirection: "row",
      width: "100%",
      paddingVertical: 20,
      paddingHorizontal: 16,
      backgroundColor: "#FCFCFC",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#F0F1F5",
      paddingTop: "15%",
    },
  });
  
export default TopBar;