import { StyleSheet } from 'react-native'
import { StyleConstants } from './constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: StyleConstants.colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  menu: {
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontFamily: StyleConstants.fontFamily.Gamestation,
    fontSize: 18
  }
})

export default styles
