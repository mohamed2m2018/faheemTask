import {StyleSheet} from 'react-native';
import {colors} from '../../statics/constants';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
    backgroundColor: colors.white,
  },
  title: {textAlign: 'center', fontSize: 20, fontWeight: '500'},
  subTitle: {textAlign: 'center', fontSize: 17},
  spacingWrapper: {
    marginVertical: 20,
    alignSelf: 'center',
  },
});
