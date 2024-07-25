import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 16,
  },
  loginContainer: {
    width: "100%",
    padding: 16,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 100,
  },
  spacerTop: {
    height: 35,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chartContainer: {
    width: "90%", // Ensure chart is centered
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 10,
  },
  button: {
    width: 100, // Ensure equal size
    height: 50, // Ensure equal size
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
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
  allSensorsButton: {
    backgroundColor: "#32CD32", // Green color for All Sensors button
    width: 100, // Match shape of other buttons
    height: 50, // Match shape of other buttons
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  alertButton: {
    backgroundColor: "#FF0000", // Red color for alert button
    alignSelf: "center",
    marginTop: 20,
    paddingHorizontal: 40, // Increased width
    paddingVertical: 10,
    borderRadius: 10,
  },
  alertButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#FFD700", // Gold text
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Shadow effect
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  descriptionContainer: {
    width: "90%", // Ensure the containers are scrollable
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 10,
    padding: 16,
    marginVertical: 10,
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF", // White text
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Shadow effect
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  navbar: {
    height: 60,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navbarText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoutButton: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: "#ff6347",
    borderRadius: 10,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  alertItem: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3,
  },
  alertListContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  alertText: {
    fontSize: 16,
    color: "#000",
  },
  alertListContentContainer: {
    paddingBottom: 100,
  },
});
