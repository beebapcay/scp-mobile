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
    padding: 4,
    borderRadius: 128,
    backgroundColor: Color.LIGHT_GRAY,
  },
  arrowText: {
    aspectRatio: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
});

export default style;
