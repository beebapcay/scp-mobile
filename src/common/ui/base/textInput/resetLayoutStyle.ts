import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  iconContainer: {
    width: '12%',
    height: '100%',
    borderRightWidth: 1,
    borderRightColor: '#DDDDDD',
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputFieldContainer: {
    width: '85%',
    height: '8%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#00C2FF',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  textInputContainer: {
    width: '86%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: '100%',
    width: '100%',
    marginVertical: 25,
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 20,
    color: '#000000',
  },
});

export default styles;
