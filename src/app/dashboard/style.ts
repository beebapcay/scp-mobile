import { StyleSheet } from 'react-native';
import { Color } from '../../common/enum/enum';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12.5,
    marginTop: 12.5,
    marginBottom: 8,
  },
  headerInfoContainer: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnInfo: {
    flex: 3,
    fontWeight: 'bold',
    marginVertical: 6,
    textAlign: 'right',
  },
  submitBtn: {
    alignSelf: 'center',
    borderRadius: 999,
    width: 46,
    height: 46,
  },
  columnValue: {
    flex: 3,
    margin: 6,
    marginLeft: 12,
    color: 'red',
  },
  textCell: {
    margin: 8,
    textAlign: 'center',
  },
  table: {
    flex: 1,
    // margin: 10,
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
});

export default style;
