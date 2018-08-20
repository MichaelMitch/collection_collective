import React from 'react'
import {connect} from "react-redux"

 class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placehold: ''
    }
  }
  componentDidMount(){
    
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