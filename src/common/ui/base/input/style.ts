import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  editInput: {
    padding: 10,
  },
  unfocusInput: {
    height: 40,
    width: "100%",
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#dfe1e6",
  },
  focusInput: {
    height: 40,
    width: "100%",
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#1eb2ff",
  },
  invalidInput: {
    height: 40,
    width: "100%",
    padding: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "red",
  },
  errorView: {
    marginBottom: 8
  },
  errorText: {
    color: 'red',
  }
});

export default styles;
