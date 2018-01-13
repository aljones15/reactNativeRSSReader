import { StyleSheet } from 'react-native';
import * as colors from './colors';

export function growShrinkFlex(grow, shrink){
  return {
    flexGrow: grow,
    flexShrink: shrink
  }
}

export function setFont(size, weight, style, color){
  return {
    fontFamily: 'Frutiger',
    fontSize: size || 20,
    fontWeight: weight || 'normal',
    color: color || 'black',
    fontStyle: style || 'normal'
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
    backgroundColor: colors.containerBG,
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
    backgroundColor: colors.headerBG,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: colors.headerBG,
    borderBottomColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    paddingTop: 15
  },
  flexCenterRow: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flexCenterCol: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
  mainFeed: {
    flexGrow: 30,
    flexShrink: 30
  },
  mainHeader: {
    flex: 2,
    backgroundColor: colors.headerBG,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  flexSpace: {
    flex: 1,
  },
  fontCenter: {
    color: colors.fontColor,
    textAlign: 'center'
  },
  fontLeft: {
    color: colors.fontColor,
    textAlign: 'left'
  },
  item: {
    marginBottom: 0.5,
    padding: 2.5,
    borderColor: colors.itemGray,
    borderWidth: 0.5,
    borderStyle: 'solid'
  },
  itemText: {
    fontFamily: 'hack',
    fontSize: 12,
    color: colors.fontColor,
    textAlign: 'center',
    padding: 5,
    backgroundColor: 'rgba(255,255,255,0.01)'
  },
  defaultFont: {
    fontFamily: 'Frutiger',
    fontSize: 20,
    fontWeight: 'normal',
    color: 'black',
    fontStyle: 'normal'
  }
});
