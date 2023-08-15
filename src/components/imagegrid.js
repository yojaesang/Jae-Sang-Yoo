import React, { Component } from 'react'
// import "./imagegrid.css";

export class ImageGrid extends Component {
  render() {
    return (
      <div className='grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-1'>
        <div className='bg-red-50 xl:h-80 sm:h-80'>1</div>
        <div className='bg-red-300 h-80'>2</div>
        <div className='bg-red-500 h-80'>3</div>
        <div className='bg-red-700 h-80'>4</div>
        <div className='bg-red-50 h-80'>1</div>
        <div className='bg-red-300 h-80'>2</div>
        <div className='bg-red-500 h-80'>3</div>
        <div className='bg-red-700 h-80'>4</div>
      </div>
    )
  }
}

export default ImageGrid