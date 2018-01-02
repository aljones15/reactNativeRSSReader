import { StyleSheet } from 'react-native';
import { styles, growFlex, makeBorder } from 'Styles/styles.js';

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: 5,
    borderWidth: 0.5,
    paddingTop: 25,
    alignItems: 'center',
    flexDirection: 'column'
  },
  list: {
    flexGrow: 1,
    flexShrink: 1,
    alignItems: 'center',
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 5
  },
  item: {
    flexGrow: 9,
    flexShrink: 8,
    padding: 5
  },
  puller: {
    flexGrow: 1,
    flexShrink: 2
  }
});

export default style
