import { StyleSheet } from 'react-native';
import { Color } from '../../../common/enum/enum';

const style = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 25,
    paddingHorizontal: 5,
  },
  form: {
    paddingBottom: 1.5,
    backgroundColor: Color.WHITE,
    marginTop: 0,
    borderWidth: 1.5,
    borderColor: Color.GRAY300,
  },
  sessionTitle: {
    backgroundColor: Color.BLUE400,
    borderWidth: 1.5,
    borderBottomWidth: 0,
    borderColor: Color.WHITE,
    color: Color.WHITE,
    fontSize: 17,
    paddingHorizontal: 15,
    paddingVertical: 6.5,
  },
  rowInput: {
    borderWidth: 1.5,
    borderColor: Color.WHITE,
    borderBottomWidth: 0,
  },
  actions: {
    marginTop: 15,
    marginBottom: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    backgroundColor: Color.BLUE500,
    paddingVertical: 8.5,
    width: '35%',
    alignItems: 'center',
    borderRadius: 10,
  },
  submitText: {
    fontSize: 18,
    color: Color.WHITE,
    fontWeight: 'bold',
  },
  cancel: {
    backgroundColor: Color.GRAY300,
    marginLeft: 15,
    paddingVertical: 8.5,
    width: '35%',
    alignItems: 'center',
    borderRadius: 10,
  },
  cancelText: {
    fontSize: 18,
    color: Color.BLACK,
  },
});

export default style;
