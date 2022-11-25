import {StyleSheet} from 'react-native';
import {colors} from '../../statics/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: colors.white,
  },
  tableBorder: {borderWidth: 2, borderColor: colors.onahau},
  table: {marginBottom: 50},
  head: {height: 40, backgroundColor: colors.aliceBlue},
  text: {textAlign: 'center', margin: 5},
  title: {textAlign: 'center', fontSize: 20},
  subTitle: {textAlign: 'center', fontSize: 15},
  image: {
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginVertical: 20,
  },
});

export default styles;
