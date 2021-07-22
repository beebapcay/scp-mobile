import { StyleSheet } from 'react-native';
import { Color } from '../../../../enum/enum';

const style = StyleSheet.create({
  container: {
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
