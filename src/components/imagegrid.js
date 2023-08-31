import React, { Component } from 'react'
import "./imagegrid.css";

export class ImageGrid extends Component {
  render() {
    return (
      <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-3'>
        <img className='row-span-2 col-span-2' src={process.env.PUBLIC_URL + '/images/home1.png'} alt=''/>
        <img className='' src={process.env.PUBLIC_URL + '/images/home2.png'} alt=''/>
        <img className='' src={process.env.PUBLIC_URL + '/images/home3.png'} alt=''/>
        <img className='' src={process.env.PUBLIC_URL + '/images/home4.png'} alt=''/>
        <img className='' src={process.env.PUBLIC_URL + '/images/home5.png'} alt=''/>
        <img className='' src={process.env.PUBLIC_URL + '/images/home6.png'} alt=''/>
        <img className='' src={process.env.PUBLIC_URL + '/images/home7.png'} alt=''/>
        <img className='' src={process.env.PUBLIC_URL + '/images/home8.png'} alt=''/>
      </div>
    )
  }
}

export default ImageGrid