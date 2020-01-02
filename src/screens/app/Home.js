import React from "react";
import { StyleSheet, View } from "react-native";
import { routes, colors, buttons, placeholders } from "../../shared/constants";
import {
  FlexCentered,
  Button,
  Text,
  TextInput,
  Centered,
  CenteredHome
} from "../../shared/styledComponents";
import Logo from "../Logo";

const Home = () => (
  <FlexCentered>
    <Logo />
    <Text>Search</Text>
    <CenteredHome>
      <TextInput placeholder={placeholders.playlist} />
      <Button>
        <Text
          color={colors.bright}
          onPress={() => {
            alert("Playlist sent!");
          }}
        >
          {buttons.sendPlaylist}
        </Text>
      </Button>
    </CenteredHome>
  </FlexCentered>
);
export default Home;
