import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  width,
  height,
  fontFamily: {
    Gamestation: 'Gamestation-Condensed',
    Miso: 'Miso'
  },
  colors: {
    white: '#ffffff',
    black: '#000000',
    darkGray: '#575956',
    mediumGray: '#979B9C',
    lightGray: '#EFEFEF',
    green: 'rgb(67, 172, 81)'
  }
}
