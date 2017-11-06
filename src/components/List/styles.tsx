import { StyleSheet } from 'react-native'
import { StyleConstants } from '../../constants'

const styles = StyleSheet.create({
  list: {
    backgroundColor: 'transparent',
    marginHorizontal: 15,
    marginBottom: 10
  },
  listView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  scrollContentContainer: {
    paddingRight: 50
  },
  gameWrapper: {
    paddingBottom: 10,
    marginHorizontal: 15,
    alignItems: 'center'
  },
  img: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: StyleConstants.colors.lightGray,
    width: 50,
    height: 50
  },
  priceFrame: {
    width: 25,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    backgroundColor: StyleConstants.colors.green,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    zIndex: 2
  },
  price: {
    fontSize: 12,
    color: 'white',
    fontFamily: StyleConstants.fontFamily.Gamestation
  },
  animatedPrice: {
    fontSize: 0,
    color: StyleConstants.colors.white
  },
  gameConsoleWrapper: {
    flexDirection: 'row'
  },
  consoleInfo: {
    justifyContent: 'flex-start'
  },
  console: {
    width: 20,
    height: 20
  },
  account: {
    fontFamily: StyleConstants.fontFamily.Miso,
    fontSize: 14
  },
  borderStyle: {
    width: 24,
    position: 'absolute',
    bottom: 0,
    backgroundColor: StyleConstants.colors.mediumGray,
    borderRadius: 12
  }
})

export default styles
