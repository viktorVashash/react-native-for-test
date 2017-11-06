import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Animated,
  Easing
} from 'react-native'
import { AnimationConstants } from '../../constants'
import styles from './styles'

interface Props {
  willChange?: boolean,
  game?: object
}

interface State {
  value: any,
  right: any
}

class ListItem extends React.Component<Props, State> {
  state = {
    value: new Animated.Value(0),
    right: new Animated.Value(0)
  }

  componentWillReceiveProps(nextProps?: Props) {
    if (nextProps.willChange) {
      this.scroll()
    }
  }

  componentDidMount() {
    this.fadeIn()
  }

  scroll = () => {
    Animated.sequence([
      Animated.timing(this.state.right, {
        toValue: 1,
        duration: AnimationConstants.SCROLL_TRANSLATE
      }),
      Animated.timing(this.state.right, {
        toValue: 0,
        duration: AnimationConstants.BACK_TO_POSITION
      })
    ]).start()
  }

  fadeIn = () => {
    Animated.timing(this.state.value, {
      toValue: 1,
      duration: AnimationConstants.FADE_IN
    }).start()
  }

  render() {
    const easingStyle = [
      styles.gameWrapper, {
        transform: [{
          translateX: this.state.right.interpolate({
            inputRange: [0, 0.5],
            outputRange: [0, 40]
          })
        }],
        opacity: this.state.value
      }
    ]
    return(
      <Animated.View style={easingStyle}>
        <Image source={this.props.game.img} style={styles.img} />
        <View style={styles.priceFrame}>
          <Text style={styles.price}>
            ${this.props.game.price}
          </Text>
        </View>
      </Animated.View>
    )
  }
}

export default ListItem
