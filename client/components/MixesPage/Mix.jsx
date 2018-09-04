import React from 'react'

const Mix = (props) => {

  return(
  
    <div className ="mix">
    <h3 className="mixInfo">{props.title}</h3>
    <h4 className="mixInfo">Artist: {props.artist}</h4>
    <h4 className="mixInfo">Date: {props.date}</h4>
    <h4 className="mixInfo">Lenth: {props.length}</h4>
    </div>)


}

export default Mix