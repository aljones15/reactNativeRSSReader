import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../headers/header.js';
import { styles, growFlex } from '../../Styles/styles.js';
import { Text, View, WebView, ScrollView, Dimensions } from 'react-native';
import Activity from '../modal/activity.js';

class ItemView extends Component{
  constructor(props){
    super(props);
    this.state = {loading: false }
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
  render(){
    let {width, height, scale} = Dimensions.get('window'); 
    return(
        <View testID="item_view" style={{ flex: 1}}>
          <Header />
          <ScrollView style={styles.scollWebView}>
  	    <WebView
	     startInLoadingState={true}
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
