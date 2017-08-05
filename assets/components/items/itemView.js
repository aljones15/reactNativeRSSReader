import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'Components/headers/Item/';
import { styles, growFlex } from 'Styles/styles.js';
import { Text, View, WebView, ScrollView, Dimensions } from 'react-native';
import Activity from 'Components/modal/activity.js';

//https://github.com/facebook/react-native/issues/10865

const patchPostMessageFunction = function() {
  var originalPostMessage = window.postMessage;

  var patchedPostMessage = function(message, targetOrigin, transfer) { 
    originalPostMessage(message, targetOrigin, transfer);
  };

  patchedPostMessage.toString = function() { 
    return String(Object.hasOwnProperty).replace('hasOwnProperty', 'postMessage');
  };

  window.postMessage = patchedPostMessage;
  
  window.onload = function(){
    window.postMessage(document.documentElement.outerHTML);
  }
};

const patchPostMessageJsCode = '(' + String(patchPostMessageFunction) + ')();';

class ItemView extends Component{
  constructor(props){
    super(props);
    this.state = {loading: false, html: ''}
  }
  componentDidMount(){
    console.log('ItemView -> this');
    console.log(this);
  }
  /***
   * changes an insecure uri to a secure uri
   * @param {uri} a url as string or object
   */
  secureUri(uri){
    if(typeof(uri) != "string"){
      uri = uri[0];
    }
    const isSecure = /^\s*[Hh][Tt]{2}[Pp][Ss]/;
    const notSecure = /^\s*[Hh][Tt]{2}[Pp]/;
    if(isSecure.test(uri)){
      return uri;
    }
    if(notSecure.test(uri)){
      return uri;
    }
    return uri;
  }
  storeHTML({nativeEvent}){
    console.log('storeHTML');
    // the message comes in on the data property
    this.state.html = nativeEvent.data;
    console.log(this.state); 
  }
  render(){
    let {width, height, scale} = Dimensions.get('window'); 
    return(
        <View testID="item_view" style={{ flex: 1}}>
          <Header />
          <ScrollView style={styles.scollWebView}>
  	    <WebView
	     startInLoadingState={true}
             ref={(wv) => this.bridge = wv}
             injectedJavaScript={patchPostMessageJsCode}
             onMessage={this.storeHTML.bind(this)}
	     renderLoading={() => {return(<Activity />)}}
   	     source={{uri: this.secureUri(this.props.item.link) }} 
	     style={{ height: height, width: width }} />
	  </ScrollView>	 
        </View>
        ) 
  }
};

const mapStateToProps = ({items}, props) => {
  return { item: items.item };
}

const dispatchToStore = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, dispatchToStore)(ItemView);
