import {
    ImageBackground,
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
  } from "react-native";
  
  import { SafeAreaView } from "react-native-safe-area-context";
  export default function HeaderPanel({ title, navigation, OnPressBack }) {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;
    return (
      <>
        <ImageBackground
          source={require("../../assets/WavePanel.png")}
          style={{ width: windowWidth, height: windowHeight / 4 }}
        >
          <SafeAreaView
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: "row",
              width: windowWidth,
            }}
          >
            <TouchableOpacity style={{ width: windowWidth / 20, height: windowHeight / 20 }} onPress={OnPressBack}>
              <Image
                source={require("../../assets/backArrow.png")}
                style={{ width: windowWidth / 20, height: windowHeight / 20 }}
              />
            </TouchableOpacity>
            <View>
              <Text
                style={{
                  color: "#fff",
                  fontSize: 48,
                  fontFamily: "Montserrat-Bold",
                }}
              >
                {title ? title : " "}
              </Text>
            </View>
            <TouchableOpacity style={{ width: windowWidth / 20, height: windowHeight / 20 }} onPress={() => { console.log('HOLA') }}>
              <Image
                source={require("../../assets/notificationBell.png")}
                style={{ width: windowWidth / 15, height: windowHeight / 20 }}
              />
            </TouchableOpacity>
          </SafeAreaView>
        </ImageBackground>
      </>
    );
  }