import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "rgba(123,104,238,0.8)",
    height: 55,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    letterSpacing: 0.5,
  },
  bottomContainer: {
    justifyContent: "center",
    height: height / 3,
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.5)",
    marginVertical: 10,
    marginHorizontal: 20,
    paddingLeft: 10,
  },
  formButton: {
    backgroundColor: "rgba(123,104,238,0.8)",
    height: 55,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  formInputContainer: {
    marginBottom: 60,
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "flex-end",
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 6,
    top: -20,
  },
});

export default styles;
