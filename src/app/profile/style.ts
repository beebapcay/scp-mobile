import { Dimensions, StyleSheet } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#1eb2ff',
  },
  avatarContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: '#1eb2ff',
    overflow: 'hidden',
    marginVertical: 5,
  },
  nameText: {
    fontSize: 40,
    marginVertical: 5,
  },
  formView: {
    width: Dimensions.get('screen').width - 40,
    margin: 20,
    backgroundColor: 'white',
    padding: 10,
    elevation: 5,
  },
  infoContainer: {
    width: '100%',
  },
  label: {
    marginBottom: 6,
    color: '#5e6c84',
  },
  btnView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  editAvatarBtn: {
    position: "absolute",
    right: "25%",
    top: "5%",
  },
  settingContainer: { flex: 1 },
  settingView: {
    position: "absolute",
    right: 20,
    top: "26%",
    backgroundColor: "white",
    elevation: 5,
  },
  menuSettingView: {
    padding: 8,
    justifyContent: "space-around",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default styles;
