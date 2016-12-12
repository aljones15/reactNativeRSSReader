import { StyleSheet } from 'react-native';

const headerBG = 'rgba(253, 195, 195, 0.78)';
export const fontColor = '#011827';
export const evenItemColor = 'rgba(146, 230, 251, 0.78)';
export const oddItemColor = 'rgba(146, 251, 167, 0.58)';

export const sizes = StyleSheet.create({
  flexOne: {
    flexGrow: 1,
    flexShrink: 1
  },
  flexTwo: {
    flexGrow: 2,
    flexShrink: 2
  },
  flexThree: {
    flexGrow: 3,
    flexShrink: 3
  },
  flexFour: {
    flexGrow: 4,
    flexShrink: 4
  },
  flexFive: {
    flexGrow: 5,
    flexShrink: 5
  },
  flexSix: {
    flexGrow: 6,
    flexShrink: 6
  },
  flexSeven: {
    flexGrow: 7,
    flexShrink: 7
  },
  flexEight: {
    flexGrow: 8,
    flexShrink: 8
  },
  flexNine: {
    flexGrow: 9,
    flexShrink: 9
  },
  flexTen: {
    flexGrow: 10,
    flexShrink: 10
  }
});

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
    flex: 30,
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
    flex: 30
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
  fontCenter: {
    color: fontColor,
    textAlign: 'center'
  },
  fontLeft: {
    color: fontColor,
    textAlign: 'left'
  },
  item: {
    backgroundColor: '#C3E5E8',
    padding: 3
  }
});

export function flatten(...flexies) {
  return StyleSheet.flatten(flexies);
}
