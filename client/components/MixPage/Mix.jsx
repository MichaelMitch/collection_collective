import React from 'react'


class Mix extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mixName: this.props.match.params.id
    }
  }

  render(){
    return(
      <h1>hello</h1>
    )
  
  }


}
export default Mix