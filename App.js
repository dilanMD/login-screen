/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { 
	StyleSheet, 
	Text, 
	View, 
	TouchableOpacity, 
} from 'react-native';

export default class App extends Component {

  state = {
		validPin: '7890',
    pin: '',
    times: 3,
    errorMessage: '',
    toggleView: true,
    blocked: false
  }

   handleInputPin = async (number) => {
    console.log(number);
    await this.setState({pin: this.state.pin + number}, () => console.log(this.state.pin));
    if( await this.state.pin.length === 4 && await this.state.pin === this.state.validPin){
      await this.setState({errorMessage: 'Success'});
      await await this.setState({pin: ''}, () => console.log(this.state.pin));
      await await this.setState({times: 3}, () => console.log(this.state.times));
      console.log("Success");
    }else if( await this.state.pin.length === 4 ){
      if(await this.state.times === 3){
        await this.setState({errorMessage: 'Wrong Password'});
        await this.setState({pin: ''}, () => console.log(this.state.pin));
        await this.state.times--;
        return
      }
    }
  }

  toggleView = () => {
    this.setState({toggleView: !this.state.toggleView});
  }

  renderLogin = () => {
    if(this.state.toggleView === true){
    return (
      <View style={styles.loginContainer}>
      <Text style={styles.title}>Enter the 4 digit pin</Text>
      <View style={{flexDirection: 'row',  marginTop: 40}}>

        <View style={this.state.pin.length > 0 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
        <View style={this.state.pin.length > 1 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
        <View style={this.state.pin.length > 2 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20}} />
        <View style={this.state.pin.length > 3 ? {backgroundColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20, marginRight: 20} : {borderColor: '#485460', borderWidth: 2, padding: 10, borderRadius: 20}} />
      </View>

        <View style={{flexDirection: 'row',  marginTop: 10, width: '80%', textAlign: 'center' ,justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'red', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>{this.state.errorMessage}</Text>
        </View>
      <View style={{marginTop: 30, width: '80%'}}>
        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.handleInputPin("1")}>
            <View style={{ width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("2")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("3")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.handleInputPin("4")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>4</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("5")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>5</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("6")}>
            <View style={{ width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>6</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.handleInputPin("7")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>7</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("8")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>8</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("9")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>9</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row',justifyContent: 'space-around'}}>
          <TouchableOpacity>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 35,}} >
              <Text style={{fontSize: 20}}></Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleInputPin("0")}>
            <View style={{width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20}}>0</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.handleClearPin()}>
            <View style={{ width: '100%', paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20,}} >
              <Text style={{fontSize: 20, color: '#ff3f34'}}>D</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLogin()}
        {this.state.toggleView === false ? <Reset toggleView={this.toggleView.bind(this)} resetPin={this.resetPin.bind(this)} /> : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: "#FFF"
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 100,
    margin: 15,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
	},
	// I did not used the following styles. I tried Object restructuring it does not works
	pinStyle1: {
		backgroundColor: '#485460', 
		borderWidth: 2, 
		padding: 10, 
		borderRadius: 20, 
		marginRight: 20
	},
	pinStyle2: {
		borderColor: '#485460', 
		borderWidth: 2, 
		padding: 10, 
		borderRadius: 20, 
		marginRight: 20
	}
});
