import { StyleSheet } from 'react-native';

const headerBG = '#84C9F5';
export const fontColor = '#011827';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  webView: {
    height: 600,
    width: 385
},
  scollWebView : {
    flex: 25,
    backgroundColor: 'red'
  },
  header: {
    flex: 2,
    backgroundColor: headerBG,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  mainFeed: {
    flex: 25
  },
  mainHeader: {
    flex: 2,
    backgroundColor: headerBG,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexSpace: {
    flex: 1,
  },
  fontStyle: {
    color: fontColor
  }
});
