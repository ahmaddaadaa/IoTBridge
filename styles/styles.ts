import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chartContainer: {
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonActive: {
    backgroundColor: "#0A84FF",
  },
  buttonInactive: {
    backgroundColor: "#e0e0e0",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
