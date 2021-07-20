import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  editInput: {
    padding: 10,
  },
  titleInput: {
    marginBottom: 6,
    color: "#5e6c84",
  },
  unfocusInput: {
    height: 40,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#dfe1e6",
  },
  focusInput: {
    height: 40,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: "#1eb2ff",
  },
  invalidInput: {
    height: 40,
    width: "100%",
    padding: 8,
    borderWidth: 1,
    borderColor: "red",
  },
});

export default styles;
