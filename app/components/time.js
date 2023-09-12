/* eslint-disable prettier/prettier */
//import React from 'react';
import React, {Component} from 'react';
import CountDown from 'react-native-countdown-component';

//import { useCountdownTimer } from 'use-countdown-timer';

import {View, StyleSheet} from 'react-native';

export default class Timer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.timerView}>
          <CountDown
            until={60}
            size={28}
            onFinish={console.log('done')}
            digitStyle={{backgroundColor: '#FFF'}}
            digitTxtStyle={{color: 'black'}}
            timeToShow={['M', 'S']}
            timeLabels={{m: '', s: ''}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  timerView: {
    Height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    
    marginTop: 100,
  },
});
