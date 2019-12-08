import React from 'react';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import fetchPlayers from '../redux/actions';
import { Link } from 'react-router-dom';
import handlePlayerClickAction from '../redux/actions';
import changeYear from '../redux/actions'

const PositionRankings = (props) => {
  useEffect(() => {
    props.players.length === 0 ? props.fetchPlayers() : console.log('loading players...')
    console.log(props.players)
  })

  const filterOutPlayers = (players) => {
    return players.filter(player => {
      return player.position_id === props.clickedPositionId
    })
  }


// + 4 denotes that I'm referring to the redshirt Years which would be four years above
// the original year.
  const filterOutYear = (players) => {
    return players.filter(player => {

      return player.year.id === parseInt(props.viewYear) || player.year.id === parseInt(props.viewYear) + 4
    })
  }

  console.log(props.viewYear)

  const positionOptions = props.positions.map(position => {
    return <option>{position.name}</option>
  })

  const sortByRank = (players) => players.sort((a,b) => (
    a.ranking - b.ranking
  ))



  return (
    <div>
      <form>
        Choose A Year: <select onChange={(e) => props.changeYear(e.target.value)}>
        <option value={1}>FR</option>
        <option value={2}>SO</option>
        <option value={3}>JR</option>
        <option value={4}>SR</option>
        </select>


      </form>

    <table className="table-head">
    <tr>
    <th className="id-section">Position Rankings</th>
    <th className="name-section">Name</th>
    <th className="height-section">Height</th>
    <th className="weight-section">Weight</th>
    </tr>
    </table>
      {sortByRank(filterOutYear(filterOutPlayers(props.players))).map(player => {
        return (
          <table className="table-body" key={player.id}>

            <tbody>

            <tr>
            <td className="id-value">{player.ranking} </td>
            <td className="name-value" onClick={() => props.handlePlayerClickAction(player.id)}>{player.name} </td>
            <td className="height-value">{player.height} </td>
            <td className="weight-value">{player.weight} </td>
            </tr>
            </tbody>

          </table>

        )
      })
    }

    </div>
  )
}

  const mapStateToProps = state => ({
    players: state.players,
    clickedPositionId: state.clickedPositionId,
    viewYear: state.viewYear,
    positions: state.positions
  })

  const mapDispatchToProps = dispatch => ({
    handlePlayerClickAction: handlePlayerClickAction,
    changeYear: changeYear

  })



export default connect(mapStateToProps, fetchPlayers)(PositionRankings);
