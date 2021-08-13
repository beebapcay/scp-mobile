import { Platform, StyleSheet } from 'react-native';
import { Color } from '../../../enum/enum';

const styles = StyleSheet.create({
  largeBtn: {
    width: Platform.OS === 'ios' ? '45%' : '35%',
    height: '10%',
    backgroundColor: '#00C2FF',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  smallBtn: {
    width: Platform.OS === 'ios' ? '45%' : '35%',
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
    color: 'white',
  },
  defaultBtn: {
    width: 100,
    padding: 8,
    marginRight: 5,
    alignItems: 'center',
    backgroundColor: '#1eb2ff',
  },
  defaultBtnDisabled: {
    width: 100,
    padding: 8,
    marginRight: 5,
    alignItems: 'center',
    backgroundColor: '#1eb2ff',
    opacity: 0.6,
  },
  outlineBtnText: {
    color: '#1eb2ff',
  },
  outlineBtn: {
    width: 100,
    borderWidth: 1,
    padding: 8,
    marginRight: 5,
    alignItems: 'center',
    borderColor: '#1eb2ff',
  },
  circleBtn: {
    backgroundColor: '#1eb2ff',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleBtnDisabled: {
    backgroundColor: '#1eb2ff',
    opacity: 0.6,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalBtn: {
    flexDirection: 'row',
    backgroundColor: Color.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 12.5,
    borderRadius: 5,
  },
  disableBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 12.5,
    borderRadius: 5,
    opacity: 0.65,
  },
  iconBtn: {
    fontSize: 26,
  },
  titleBtn: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;
