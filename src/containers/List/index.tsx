import React, { Component } from 'react'
import {
  View
} from 'react-native'
import { ListView } from '../../components'
import styles from './styles'
import img1 from '../../../../src/imgs/fifa.png'
import img2 from '../../../../src/imgs/fifa1.png'
import ps from '../../../../src/imgs/ps.png'
import xbox from '../../../../src/imgs/xbox.png'

interface Props { }

interface State {
  games?: Array<object>
}

class List extends Component<Props, State> {
  state = {
    games: [
      {
        id: 0,
        console: ps,
        price: '30',
        account: 0,
        img: img1
      },
      {
        id: 1,
        console: xbox,
        price: '30',
        account: 0,
        img: img2
      },
      {
        id: 2,
        console: ps,
        price: '30',
        account: 0,
        img: img2
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => this.setState({
      games: [...this.state.games, {
        id: 3,
        console: xbox,
        price: '30',
        account: 0,
        img: img1
      }]
    }), 5000)
    setTimeout(() => this.setState({
      games: [...this.state.games, {
        id: 4,
        console: xbox,
        price: '30',
        account: 0,
        img: img1
      }]
    }), 10000)
  }

  render() {
    const { games } = this.state
    return(
      <View style={styles.container}>
        <ListView games={games} />
      </View>
    )
  }
}

export default List
