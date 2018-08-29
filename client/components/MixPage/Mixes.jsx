import React from 'react'
import {connect} from "react-redux"

import {getMixes} from '../../actions/mixes'
import Mix from './Mix'
 class Mixes extends React.Component {

  componentDidMount(){
    this.props.dispatch(getMixes())
  }

  render(){
  return ( 
    <div>
      <h3 className="header-title"> Latest Mixes </h3>
      <div className="mixPageBody">
        {this.props.mixInfo.map(mix => {
          return <Mix key={mix.id} title={mix.title} artist={mix.name} date={mix.date} length={mix.length}> </Mix>
        })}
      </div>
    </div>
  )
  }
}
const mapStateToProps = (state) => {
  if (state.getMixes.length === undefined ){
    return {
      mixInfo: []
    }
  }
    else{
      return {
      mixInfo: state.getMixes
    }
}
}
export default connect(mapStateToProps)(Mixes)