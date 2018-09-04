import React from 'react'
import {Link} from 'react-router-dom'
const Mixblurb = (props) => {

  return(
  
    <Link to = {`/Mixes/${props.title}`}>
    <div className ="mix">
    <h3 className="mixInfo">{props.title}</h3>
    <h4 className="mixInfo">Artist: {props.artist}</h4>
    <h4 className="mixInfo">Date: {props.date}</h4>
    <h4 className="mixInfo">Length: {props.length}</h4>
    </div>
    </Link>
  )
}

export default Mixblurb