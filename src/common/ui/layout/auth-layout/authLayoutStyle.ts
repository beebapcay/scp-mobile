import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBox: {
    width: '100%',
    height: '25%',
    borderBottomLeftRadius: 100,
    backgroundColor: '#00C2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBox: {
    width: '100%',
    height: '25%',
    borderTopRightRadius: 100,
    backgroundColor: '#00C2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  pickerContainer: {
    width: '75%',
    height: '10%',
    borderRadius: 10,
    borderColor: '#00C2FF',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: '100%',
    color: '#000000',
  },
  imageContainer: {
    position: 'absolute',
    bottom: 20,
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 20,
    height: 20,
  },
  errorText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF0000',
  },
  inputAndroid: {
    width: '100%',
    height: '100%',
    color: '#000000',
  },
  inputIOS: {
    width: '100%',
    height: '100%',
    color: '#000000',
    paddingHorizontal: 10,
  },
});

export default styles;
