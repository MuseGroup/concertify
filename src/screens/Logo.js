import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlexCentered } from "../shared/styledComponents";

const Logo = () => {
  return (
    <FlexCentered>
      <View>
        <Image
          style={{
            width: 300,
            height: 300,
            paddingLeft: 400,
            marginLeft: 27,
            justifyContent: "center",
            alignItems: "center"
          }}
          source={require("../../assets/logo.png")}
        />
      </View>
    </FlexCentered>
  );
};

export default Logo;
