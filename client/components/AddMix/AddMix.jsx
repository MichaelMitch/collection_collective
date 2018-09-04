import React from 'react'


class AddMix extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      artist: '',
      title: '',
      date:0,
      length:0
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeHandler(e){
    this.setState=({
      [e.target.name]:e.target.value
    })
  }

  submitHandler(){
    if(this.state.artist.length > 0 &&
       this.state.title.length > 0 &&
       this.state.date > 0 &&
       this.state.length > 0){
        
      }
  }



  render(){
    return(
      <div>
        <h3>Submit Mix</h3>
        <div>
          <h5>Artist</h5>
          <input onChange={this.changeHandler} name='"artist' />
          <h5>Title</h5>
          <input onChange={this.changeHandler} name='"title' />
          <h5>Date</h5>
          <input onChange={this.changeHandler} name='"date' />
          <h5>Length</h5>
          <input onChange={this.changeHandler} name='"length' />
          <button onclick={this.submitHandler}></button>
        </div>
        

      </div>
    )
  }

}

export default connect()(AddMix)