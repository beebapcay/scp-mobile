import { StyleSheet } from 'react-native';
import { Color } from '../../common/enum/enum';

const style = StyleSheet.create({
  container: {
    marginTop: 24,
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnInfo: {
    flex: 1,
    marginVertical: 8,
    textAlign: 'right',
  },
  submitBtn: {
    marginRight: 10,
  },
  columnValue: {
    flex: 2,
    margin: 8,
    color: 'red',
  },
  textCell: {
    margin: 8,
    textAlign: 'center',
  },
  table: {
    flex: 1,
    margin: 10,
  },
  button: {
    alignSelf: 'center',
    marginBottom: 8,
    backgroundColor: Color.BLUE,
  },
  editProfileText: {
    marginHorizontal: 8,
    marginVertical: 4,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Color.WHITE,
  },
  avatarButton: {
    marginHorizontal: 8,
  },
  avatarImage: {
    width: 24,
    height: 24,
  },
});

export default style;
