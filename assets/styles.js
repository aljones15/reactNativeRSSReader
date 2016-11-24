import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: 'blue'
  },
  mainFeed: {
    marginTop: 70
  },
  mainHeader: {
    marginTop: 20
  },
  flexSpace: {
    flex: 1,
  }
});
