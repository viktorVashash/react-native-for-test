import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  StatusBar
} from 'react-native'
import TestApp from './src'
import { StyleConstants } from './src/constants'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <TestApp />
      </View>
    )
  }
}

const styles: any = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConstants.colors.black
  }
})
