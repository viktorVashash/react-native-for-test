import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import { List } from './containers'
import styles from './styles'

class TestApp extends Component {
  render () {
    return(
      <View style={styles.container}>
        <View style={styles.menu}>
          <Text style={styles.title}>
            User1
          </Text>
        </View>
        <List />
      </View>
    )
  }
}

export default TestApp
