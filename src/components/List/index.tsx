import React, { Component } from 'react'
import {
  View,
  FlatList,
  ActivityIndicator
} from 'react-native'
import ListItem from './ListItem'
import NewItem from './NewItem'
import styles from './styles'

interface Props {
  games: Array<object>
}

interface State {
  games: Array<object>,
  willChange: boolean,
  scrolling: boolean
}

class List extends Component<Props, State> {
  _previousData = this.props.games

  state = {
    games: [...this.props.games].reverse(),
    willChange: false,
    scrolling: true
  }

  componentWillReceiveProps({ games }: Props) {
    if (games !== this._previousData) {
      this.setState({
        willChange: true,
        scrolling: false
      })
      setTimeout(() => {
        this._previousData = games
        this.setState({
          games: [...games].reverse(),
          willChange: false,
          scrolling: true
        })
      }, 1500)
    }
  }

  keyExtractor = (game: any, index: number) => game.id

  renderRow = (game: any) => {
    const { willChange } = this.state
    const last = game.item.id + 1 === this._previousData.length
    const ItemComponent = last ? NewItem : ListItem

    return(
      <ItemComponent
        willChange={willChange}
        game={game.item} />
    )
  }

  getItemLayout = (data: Array<object>, index: number) => {
    return { offset: index, length: index, index: index}
  }

  render() {
    return(
      <View style={styles.list}>
        { this.state.games ?
          <FlatList
            contentContainerStyle={styles.scrollContentContainer}
            scrollEnabled={this.state.scrolling}
            extraData={this.state.willChange}
            showsHorizontalScrollIndicator={false}
            keyExtractor={this.keyExtractor}
            horizontal={true}
            style={styles.listView}
            data={this.state.games}
            getItemLayout={this.getItemLayout}
            renderItem={this.renderRow} /> :
          <ActivityIndicator
            color='#000000'
            animating={true} />
        }
      </View>
    )
  }
}

export default List
