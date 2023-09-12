/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity,TouchableHighlight, Image} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin: ['', '', '', ''],
    };
  }

  verifier = temp=>{
    const pincode=[1,2,3,4];
  
  }

  

  _onPressNumber = num => {
    let tempCode = this.state.pin;
    for (var i = 0; i < tempCode.length; i++) {
      if (tempCode[i] == '') {
        tempCode[i] = num;
        break;
      } else {
        continue;
      }
    }
    this.setState({pin: tempCode});
  };
   _onPressCancel = () => {
    let tempCode = this.state.pin;
    for (var i = tempCode.length - 1; i >= 0; i--) {
      if (tempCode[i] != '') {
        tempCode[i] = '';
        break;
      } else {
        continue;
      }
    }
    this.setState({pin: tempCode});
  };



  render() {
    let numbers = [
      {id:1},
      {id:2},
      {id:3},
      {id:4},
      {id:5},
      {id:6},
      {id:7},
      {id:8},
      {id:9},
      
      {id:'0'},
      


    ];

    return (
      <View style={Styles.view}>
        <View style={Styles.view2}>
          <Text style={Styles.bodyText}> Enter Your PIN Code </Text>
        </View>

        <View style={Styles.codecontainer}>
          {this.state.pin.map(p => {
            let style = p != '' ? Styles.code1 : Styles.code;
            return <View style={style} />;
          })}
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <View style={Styles.numberpad}>
            {numbers.map(num => {
              return (
                <TouchableHighlight
                underlayColor="#80e9d8"
                  style={Styles.numbers}
                  key={num.id}

                  onPress={() => this._onPressNumber(num.id)}>
                  <Text style={Styles.number_Text}>{num.id}</Text>
                </TouchableHighlight>
              );
            })}
              <View style={Styles.buttons}>
              <TouchableOpacity onPress={() => this._onPresscancel()}>
                  <Text > delete </Text>
                
                </TouchableOpacity>
            </View>


          </View>
        </View>

      </View>
    );
  }
}

const Styles = StyleSheet.create({
  view: {
    flex: 1,

  },

  view2: {
    height: 178,
    alignItems: 'center',
    justifyContent: 'center',
  },

  bodyText: {
    fontSize: 30,
    fontFamily: 'Roboto',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0a4380',
    margin: 5,
    opacity:0.7,
  },
  codecontainer: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
    top:20,

  },




  code: {
    width: 10,
    height: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#4dbdaa',
    margin: 10,
  },
  code1: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#4dbdaa',
    margin: 10,
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 1,
    marginTop: 1,
    marginRight: 5,
    backgroundColor: '#ffffff',
  },


  numberpad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    width: 320,
    height: 348,
    top: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbers: {
    width: 75,
    height: 75,
    borderRadius: 75,
    margin: 14,
    backgroundColor: '#EEF4FA',
    justifyContent: 'center',
    alignItems: 'center',

  },

  number_Text: {
    fontFamily: 'roboto',
    fontSize: 36,
    color: '#0a4380',
    letterSpacing: 0,
    textAlign: 'center',
    opacity:0.5,
  },
  buttons: {
    alignItems: 'center',
    marginRight: -65,
    color: '#b4bbbe',
  },
});
