import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    maxWidth: 300,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },
  logo_text: {
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
    marginBottom: 5,
    textTransform: "uppercase",
  },
  input: {
    marginTop: 12,
    marginBottom: 10,
    padding: 7,
    width: "75%",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#e8e8e8",
  },
  button: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  button_text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  bubble: {
    flexDirection: "column",
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  arrow: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#fff",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: "transparent",
    borderColor: "transparent",
    borderTopColor: "#007a87",
    borderWidth: 16,
    alignSelf: "center",
    marginTop: -0.5,
    // marginBottom: -15
  },
});
