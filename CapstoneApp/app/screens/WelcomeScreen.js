import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    // <ImageBackground
    //   style={styles.background}
    //   source={require("../assests/background.jpg")}
    // ></ImageBackground>

    <View style={styles.background}>
      <View styles={styles.logoContainer}>
        {/* <Image style={styles.logo} source={require("../assets/logo")} /> */}
        <Text>Welcome!</Text>
      </View>

      <View style={styles.loginButton}>
        <Text>Login</Text>
      </View>

      <View style={styles.signupButton}>
        <Text>SignUp</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "honeydew",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  loginButton: {
    backgroundColor: "tomato",
    width: "100%",
    height: 70,
  },

  signupButton: {
    backgroundColor: "yellow",
    width: "100%",
    height: 70,
  },

  logo: {
    width: 100,
    height: 100,
    position: "absolute",
    top: 70,
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default WelcomeScreen;
