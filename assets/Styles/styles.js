import { StyleSheet } from 'react-native';

const headerBG = '#F0F0F0FF';
export const fontColor = '#011827FF';
export const evenItemColor = '#F1F1FF10'; 
export const oddItemColor = '#F1F1FF90';

export function growShrinkFlex(grow, shrink){
  return {
    flexGrow: grow,
    flexShrink: shrink
  }
}

export function growFlex(grow){
  return growShrinkFlex(grow, grow);
}

export function makeBorder(color, width, style){
    return {
      borderColor: color,
      borderWidth: width,
      borderStyle: style
    }
}

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
    flexGrow: 25,
    flexShrink: 25,
    backgroundColor: '#F5F5F5FF'
  },
  header: {
    flexGrow: 2,
    flexShrink: 2,
    backgroundColor: headerBG,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingTop: 15
  },
  flexCenterRow: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainFeed: {
    flexGrow: 30,
    flexShrink: 30
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
    padding: 3,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid'
  }
});

export function flatten(...flexies) {
  return StyleSheet.flatten(flexies);
}
