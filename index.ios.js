/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Button, Card } from 'react-native-material-design';


function getRss(url, cb){
    return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'text/xml'
    }
  }).then((r) => {
    if(r){
      r.text().then((t) => cb(t))
  } else {
    cb(null);
  }
  });
}




class RSS extends Component {
  render() {
    return(
      <View style={styles.container }>
         {this.props.children}
      </View>
    )
  }
}

class CHANNEL extends Component {
  render() {
    return(
    <View>
      {this.props.children}
    </View>
  )
  }
}

class ITEM extends Component {
  render() {
    <View>
      {this.props.children}
    </View>
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

class TITLE extends Component {
  render() {
    return(
    <View>
      {this.props.children}
    </View>
  )
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

function getComponent(s){
  console.log("s");
  console.log(s);
  if(!s){
    return(<Text>no s</Text>);
  }
  const rss_parse = /^\s*<\s*([A-z]+)[^>]*>([\s\S]*)<\/([A-z]+)[^>]*>\s*$/;
  const just_text = /^([^<]*)<\/[A-z]+[^>]*>([\s\S]*)/;
  if(!rss_parse.test(s)) {
    if(just_text.test(s)){
      let text = just_text.exec(s);
      console.log(text);
      return(<Text>{ text[1] }</Text>)
    }
    return null;
  };


  let match = rss_parse.exec(s);
  let tag = match[1] ? match[1].toLowerCase() : null;
  console.log("processing " + tag);
  switch (tag) {
    case "rss":
      console.log("returning rss tag");
      return(<RSS>{getComponent(match[2])}</RSS>);
    case "channel":
      return(<CHANNEL>{getComponent(match[2])}</CHANNEL>);
    case "title":
      return(<TITLE>{getComponent(match[2])}</TITLE>);
    default:
      if(!tag){
        console.log("tag");
        return(<Text>{match[2]}</Text>);
      }
      return(<Text>fell through</Text>);
  }
}

class test3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      rss: <View style={styles.container}><Text>Loading</Text></View>
    };
  }
  printResult(responseText){
      this.setState({ rss: getComponent(responseText) });

  }
  fetchResult(){
    let rss = getRss("file:///Users/andrewjones/Documents/codePen/reactNative/test3/simple.rss", this.printResult.bind(this));
    return rss;
  }
  componentDidMount(){
    this.fetchResult();
  }
  render() {
    console.log(this.state.rss);
    return(this.state.rss);
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
