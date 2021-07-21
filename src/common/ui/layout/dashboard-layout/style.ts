import { StyleSheet } from 'react-native';
import { Color } from '../../../enum/enum';

const style = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  flatlist: {
    width: 768,
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: Color.BLUE,
  },
  headerTextCell: {
    padding: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  columnNo: {
    flex: 0.5,
  },
  columnFrom: {
    flex: 1,
  },
  columnTo: {
    flex: 1,
  },
  columnDays: {
    flex: 0.5,
  },
  columnReason: {
    flex: 2,
  },
  columnStatus: {
    flex: 1,
  },
  columnApprover: {
    flex: 1.5,
  },
  columnInfo: {
    flex: 1,
    marginVertical: 8,
    textAlign: 'right',
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
  pageSelection: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowNavigation: {
    margin: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 128,
    backgroundColor: Color.LIGHT_GRAY,
  },
  arrowText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default style;
