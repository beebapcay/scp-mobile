import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  largeBtn: {
    width: '35%',
    height: '10%',
    backgroundColor: '#00C2FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  smallBtn: {
    width: '35%',
    height: '7%',
    backgroundColor: '#00C2FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  textBtn: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  defaultBtnText: {
    color: "white",
  },
  defaultBtn: {
    width: 100,
    padding: 8,
    marginRight: 5,
    alignItems: "center",
    backgroundColor: "#1eb2ff",
  },
  defaultBtnDisabled: {
    width: 100,
    padding: 8,
    marginRight: 5,
    alignItems: "center",
    backgroundColor: "#1eb2ff",
    opacity: 0.6,
  },
  outlineBtnText: {
    color: "#1eb2ff",
  },
  outlineBtn: {
    width: 100,
    borderWidth: 1,
    padding: 8,
    marginRight: 5,
    alignItems: "center",
    borderColor: "#1eb2ff",
  },
  circleBtn: {
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
  circleBtnDisabled: {
    backgroundColor: "#1eb2ff",
    opacity: 0.6,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: "25%",
    top: "5%",
  }
});

export default styles;
