import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  Animated
} from 'react-native'
import { AnimationConstants } from '../../constants'
import styles from './styles'

interface Props {
  willChange: boolean,
  game: object
}

interface State {
  opacity: any,
  right: any,
  priceView: any,
  animatedPrice: any,
  ellipse: any
}

class ListItem extends Component<Props, State> {
  state = {
    opacity: new Animated.Value(0),
    right: new Animated.Value(0),
    priceView: new Animated.Value(0),
    animatedPrice: new Animated.Value(0),
    ellipse: new Animated.Value(0)
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.willChange) {
      this.fadeOut()
    }
  }

  componentWillMount() {
    this.consoleAnimation()
  }

  componentWillUnmount() {
    this.fadeOut()
  }

  fadeOut = () => {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      duration: AnimationConstants.FADE_OUT
    }).start()
  }

  consoleAnimation = () => {
    Animated.sequence([
      Animated.delay(AnimationConstants.DELAY),
      Animated.parallel([
        Animated.timing(this.state.opacity, {
          toValue: 1,
          duration: AnimationConstants.SEQUNCED_TRANSLATE
        }),
        Animated.timing(this.state.right, {
          toValue: 1,
          duration: AnimationConstants.SEQUNCED_TRANSLATE
        })
      ]),
      Animated.timing(this.state.ellipse, {
        toValue: 1,
        duration: AnimationConstants.SEQUNCED_ANIMATION
      }),
      Animated.timing(this.state.priceView, {
        toValue: 1,
        duration: AnimationConstants.SEQUNCED_ANIMATION
      }),
      Animated.parallel([
        Animated.timing(this.state.animatedPrice, {
          toValue: 1,
          duration: AnimationConstants.SEQUNCED_ANIMATION
        }),
        Animated.timing(this.state.ellipse, {
          toValue: 0,
          duration: AnimationConstants.SEQUNCED_ANIMATION
        })
      ])
    ]).start()
  }

  render() {
    const consoleStyle = [
      styles.gameConsoleWrapper, {
        opacity: this.state.opacity.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0, 0.5, 1]
        }),
        transform: [{
          translateX: this.state.right.interpolate({
            inputRange: [0, 1],
            outputRange: [-100, -15]
          })
        }]
      }
    ]
    const animatedPriceView = [
      styles.priceFrame, {
        transform: [{
          translateY: this.state.priceView.interpolate({
            inputRange: [0, 1],
            outputRange: [24, -4]
          })
        }]
      }
    ]
    const animatedPrice = [
      styles.price, {
        transform: [{
          scale: this.state.animatedPrice.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
          })
        }]
      }
    ]
    const animatedBorderStyle = [
      styles.borderStyle, {
        transform: [{
            scaleX: 4
          }, {
          scale: this.state.ellipse.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5]
          }, {
            perspective: 1000
          })
        }],
        paddingVertical: this.state.ellipse.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 5]
        })
      }
    ]
    return(
        <Animated.View style={consoleStyle}>
          <View style={styles.gameWrapper}>
            <Image source={this.props.game.img} style={styles.img} />
            <Animated.View style={animatedPriceView}>
              <Animated.Text style={animatedPrice}>
                ${this.props.game.price}
              </Animated.Text>
            </Animated.View>
            <Animated.View style={animatedBorderStyle}></Animated.View>
          </View>
          <View style={styles.consoleInfo}>
            <Image source={this.props.game.console} style={styles.console} />
            <Text style={styles.account}>
              Account {this.props.game.account}
            </Text>
          </View>
        </Animated.View>

    )
  }
}

export default ListItem
