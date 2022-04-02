import {
  View,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  Alert,
  Image,
} from "react-native";
import { styles } from "../utils/styles";
import React, { useState, useEffect } from "react";
import Region from "../images/region.jpg";

export default function Home({ navigation }) {
  //Region
  const [latitudeRegion, setLatitudeRegion] = useState();
  const [longitudeRegion, setLongitudeRegion] = useState();

  const dataSend = () => {
    if (latitudeRegion == "") {
      Alert.alert("Warning", "Must complete the Region Latitude", [
        { text: "Ok" },
      ]);
    } else if (longitudeRegion == "") {
      Alert.alert("Warning", "Must complete the Region Longitude", [
        { text: "Ok" },
      ]);
    } else {
      navigation.navigate({
        name: "Map",
        params: {
          Regionlatitude: latitudeRegion,
          Regionlongitude: longitudeRegion,
        },
      });
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.logo_text}>Region Tracker</Text>
        <Image source={Region} style={styles.logo} resizeMode="contain" />
        <TextInput
          style={styles.input}
          placeholder="Put the latitude of the Region"
          onChangeText={(a) => setLatitudeRegion(a)}
          keyboardType="number-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Put the longitude of the Region"
          onChangeText={(b) => setLongitudeRegion(b)}
          keyboardType="number-pad"
        />
        <TouchableOpacity onPress={dataSend} style={styles.button}>
          <Text style={styles.button_text}>Send data</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
