import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex, headerBG } from 'Styles/styles.js';
import { REMOVE_ITEM, TOGGLE_MODAL } from 'Services/redux/actions.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeedModal from 'Components/modal/modal.js';
import HeaderStyles from './style.js';
import LinearGradient from 'react-native-linear-gradient';

/**
* This is the Main Page's Header
* it contains the Menu and Add Feed Buttons
* @ params {Object} props a one dimensional object (no nested structs)
* @param {Object} state not using any state right now
*/
class MainHeader extends React.PureComponent{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
	<View 
	style={[HeaderStyles.main]}
	testID="main_header"
	>
          <LinearGradient colors={['#FFFFFF', '#EEEEFD']} style={HeaderStyles.linearGradient}>
	    <Text 
              onPress={this.props.open("menu")} 
              style={HeaderStyles.textBox} >
	      <Icon name="list" size={30} color="#080707"/>
	    </Text>
	    <Text 
	      onPress={this.props.open("menu")} 
	      style={HeaderStyles.textBox}>Menu</Text>
          </LinearGradient>
          <LinearGradient colors={['#FFFFFF', '#EEEEFD']} style={HeaderStyles.linearGradient}>
	    <Text onPress={this.props.open("new_feed")} 
	      style={HeaderStyles.textBox}
            >
	      <Icon name="plus" size={30} color="#080707"/>
	    </Text>
	    <Text 
	      onPress={this.props.open("new_feed")} 
	      style={HeaderStyles.textBox}> 
             Add 
            </Text>
          </LinearGradient>
	</View>
	<FeedModal update={this.props.update} />
      </View>
    )
  }
}

const mapStateToProps = ({display}, props) => {
  return { ...display };
};

const dispatchToStore = (dispatch) => {
  return {
    open: (modal_name) => (event) => dispatch({type: TOGGLE_MODAL, name: modal_name})
  }
};

export default connect(mapStateToProps, dispatchToStore)(MainHeader);
