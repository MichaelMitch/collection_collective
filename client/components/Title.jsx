import React from 'react'
import {Route, Link} from 'react-router-dom'

 class Title extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      placehold: 'hello'
    }
  }
  
  render(){
  return (
    <div className ="Title">
      <h1 className="titlePg-title mainPage"> Collection Collective </h1>
      <p className="titlePg-intro mainPage"> Find those hard to ID tracks in your favourite DJ sets, mixes, or podcasts </p>
      <div className="titlePg-Btn"> <Link to='home'><button className="titlePg-Btn" > Enter </button></Link> </div>
    </div>

  )
  }
}

export default Title