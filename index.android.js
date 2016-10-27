/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  ListView,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import { Button, Card, Subheader } from 'react-native-material-design';

let yahooQLbase = "https://query.yahooapis.com/v1/public/yql?q=select * from rss where url=";
// https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20rss%20where%20url%20=%20%27http://boingboing.net/feed%27


function getRss(url, cb){
    let uri = encodeURI(yahooQLbase + "'" + url + "'");
    console.log('uri is ' + uri);
    return fetch(uri, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  }).then((r) => {
    if(r){
      r.json().then((t) => cb(t))
  } else {
    cb(null);
  }
  });
}

class ITEM extends Component {
  constructor(props){
    super(props);
  }
  makeSafeLink(){
    console.log("make safe link");
    return null; //this.props.item.link.replace("http", "https");
  }
  ErrorFun(){
    return(
      <Text>Error</Text>
    )
  }
  getHtml(){
    return '<!DOCTYPE html><html><body><h1>This is a heading!</h1></body></html>';
  }
  render() {
      return(
        <View>
          <Subheader text={this.props.item.title ? this.props.item.title : ""} />
          </View>
      )
  }
}

class COMMENT extends Component {
  render() {
    <View>
      {this.props.children}
    </View>
  }
}

class ENCLOSURE extends Component {
  render() {
    <View>
      {this.props.children}
    </View>
  }
}

class AUTHOR extends Component {
  render() {
    <View>
      {this.props.children}
    </View>
  }
}

class CATEGORY extends Component {
  render() {
    <View>
      {this.props.children}
    </View>
  }
}



class LINK extends Component {
  render() {
    <View>
    </View>
  }
}

class URL extends Component {
  render() {
    <View>
    </View>
  }
}

class IMAGE extends Component {
  render() {
    <View>
    </View>
  }
}

class WIDTH extends Component {
  render() {
    <View>
    </View>
  }
}

class HEIGHT extends Component {
  render() {
    <View>
    </View>
  }
}

class DESCRIPTION extends Component {
  render() {
    <View>
    </View>
  }
}

class LANGUAGE extends Component {
  render() {
    <View>
    </View>
  }
}

class RATING extends Component {
  render() {
    <View>
    </View>
  }
}

class COPYRIGHT extends Component {
  render() {
    <View>
    </View>
  }
}

class PUBDATE extends Component {
  render() {
    <View>
    </View>
  }
}

class LASTBUILDDATE extends Component {
  render() {
    <View>
    </View>
  }
}

class DOCS extends Component {
  render() {
    <View>
    </View>
  }
}

class CLOUD extends Component {
  render() {
    <View>
    </View>
  }
}

class TTL extends Component {
  render() {
    <View>
    </View>
  }
}

class MANAGINGEDITOR extends Component {
  render() {
    <View>
    </View>
  }
}

class WEBMASTER extends Component {
  render() {
    <View>
    </View>
  }
}

class SKIPHOURS extends Component {
  render() {
    <View>
    </View>
  }
}


class HOUR extends Component {
  render() {
    <View>
    </View>
  }
}

class SKIPDAYS extends Component {
  render() {
    <View>
    </View>
  }
}

class DAY extends Component {
  render() {
    <View>
    </View>
  }
}

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2 });

class test3 extends Component {
  constructor(props){
    super(props)

    this.state = {
      rss: ds.cloneWithRows(["Loading"])
    };
  }
  printResult(responseText){
      console.log(responseText.query.results.item[0]);
      if(responseText.query && responseText.query.results && responseText.query.results.item){
        this.setState({ rss: ds.cloneWithRows(responseText.query.results.item) });
      }


  }
  fetchResult(){
    let rss = getRss("http://boingboing.net/feed", this.printResult.bind(this));
    return rss;
  }
  componentDidMount(){
    this.fetchResult();
  }
  render() {
    return(
      <View>
      <ListView
        dataSource={this.state.rss}
        renderRow={(rowData) => <ITEM item={rowData}>item</ITEM>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
});

AppRegistry.registerComponent('test3', () => test3);
