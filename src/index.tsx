import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'
import { List } from './containers'
import styles from './styles'

interface Props {}

interface State {}

class TestApp extends Component<Props, State> {
  render() {
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
