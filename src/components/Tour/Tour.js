import React, { Component } from 'react'
import './Tour.scss'
export default class Tour extends Component {
  state={
    showInfo:false,
    color:''
  }
  handleInfo=()=>{
    this.setState({
      showInfo:!this.state.showInfo,
      color:this.props.color
    })
  }
  render() {
    const{id,city,img,name,info}=this.props.tour;
    const {removeTour}=this.props;
    
    return (
        <article style={{backgroundColor:this.state.color}} className='tour'>
        <div className='img-container'>
        <img src={img} alt='pic'/>
        <span onClick={()=>{removeTour(id)}} className='close-btn'>
          <i className='fas fa-window-close'/>
        </span>
        </div>
        <div className='tour-info'>
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>info{""} <span onClick={this.handleInfo} className='fas fa-caret-square-down'></span></h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
        </article>
    )
  }
}
