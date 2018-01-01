import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flexGrow: 2,
    flexShrink: 2,
    backgroundColor: '#FFFFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#FFFFFFFF',
    borderBottomColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingTop: 15
  },
  linearGradient: {
    flexGrow: 3,
    flexShrink: 3,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textBox: {
    textAlign: 'left',
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'rgba(255,255,255,0.0)'
  }
});

export default styles;
