import React from 'react'
import {connect} from "react-redux"

import {getMixes} from '../actions/mixes'

 class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placehold: ''
    }
  }
  componentDidMount(){
    this.props.dispatch(getMixes())
  }

  render(){
  return ( 
    <div className ="home">
      
    </div>
  )
  }
}
const mapStateToProps = (state) => {
  return {
    mixInfo: state.mixInfo
  }
}
export default connect(mapStateToProps)(Home)