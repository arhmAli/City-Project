import React, { Component } from 'react'
import Tour from '../Tour/Tour'
import './TourList.scss'
import {tourData} from './tourData'
class TourList extends Component {
  state={
    tours:tourData
  }
  removeTour=id=>{
    const{tours}=this.state;
    const filteredTours=tours.filter(tour=>tour.id !== id);
    this.setState({
      tours:filteredTours
    })
  }
  render() {
    console.log(this.state.tours)
    const{tours}=this.state
    return (
    <section className='tourList'>
        {tours.map(tour=>(
          <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
        ))}
    </section>
        )
  }
}
export default TourList
