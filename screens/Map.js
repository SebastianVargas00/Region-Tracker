import { View, Text } from "react-native";
import { styles } from "../utils/styles";
import React, { useState, useEffect } from "react";
import MapView, { Callout, Marker, Circle } from "react-native-maps";

export default function Map({ navigation, route }) {
  const { Regionlatitude, Regionlongitude } = route.params;
  const [city, setCity] = useState({});
  //Region
  const [region, setRegion] = useState({
    latitude: Regionlatitude,
    longitude: Regionlongitude,
  });

  const [market, setMarket] = useState({
    latitude: "",
    longitude: "",
  });

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "geocodeapi.p.rapidapi.com",
      "X-RapidAPI-Key": "9be46ee9a7msh989810cbe4f6610p1c99c8jsnc8795d402950",
    },
  };

  function getData() {
    fetch(
      "https://geocodeapi.p.rapidapi.com/GetNearestCities?latitude=" +
        Number(region.latitude) +
        "&longitude=" +
        Number(region.longitude) +
        "&range=0",
      options
    )
      .then((response) => response.json())
      .then((json) => setCity(json[0]))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: Number(region.latitude),
          longitude: Number(region.longitude),
          /*Zoom Level*/
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: Number(region.latitude),
            longitude: Number(region.longitude),
          }}
          pinColor="red"
        >
          <Callout>
            <View>
              <View styles={styles.bubble}>
                <Text>Nearest City: {city.City}</Text>
                <Text>Latitude: {region.latitude}</Text>
                <Text>Longitude: {region.longitude}</Text>
                <View style={styles.arrowBorder} />
                <View style={styles.arrow} />
              </View>
            </View>
          </Callout>
        </Marker>
        <Circle
          center={{
            latitude: Number(region.latitude),
            longitude: Number(region.longitude),
          }}
          radius={1000} //ms
        ></Circle>
      </MapView>
    </View>
  );
}
