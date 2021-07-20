import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {},
  header: {},
  headerText: {
    fontSize: 30,
    fontWeight: "500",
    color: "#1eb2ff",
  },

  avatarContainer: {
    position: "relative",
    alignItems: "center",
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: "#1eb2ff",
    overflow: "hidden",
    marginVertical: 5,
  },
  nameText: {
    fontSize: 40,
    marginVertical: 5,
  },
  formView: {
    width: Dimensions.get("screen").width - 40,
    margin: 20,
    backgroundColor: "white",
    padding: 10,
    elevation: 5,
  },
  infoContainer: {
    width: "100%",
  },
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
  btnView: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  editBtn: {
    width: 100,
    borderWidth: 1,
    padding: 8,
    alignItems: "center",
    borderColor: "#1eb2ff",
  },
  editBtnText: {
    color: "#1eb2ff",
  },
  saveBtn: {
    width: 100,
    padding: 8,
    marginLeft: 10,
    alignItems: "center",
    backgroundColor: "#1eb2ff",
  },
  saveBtnDisable: {
    width: 100,
    padding: 8,
    marginLeft: 10,
    alignItems: "center",
    backgroundColor: "#1eb2ff",
    opacity: 0.6,
  },
  saveBtnText: {
    color: "white",
  },
  editAvatarBtn: {
    backgroundColor: "#1eb2ff",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "25%",
    top: "5%",
  },
  editAvatarBtnDisable: {
    backgroundColor: "#78d1ff",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "25%",
    top: "5%",
  },
});

export default styles;
