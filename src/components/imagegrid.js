import React, { Component } from 'react'
import "./imagegrid.css";

export class ImageGrid extends Component {
  render() {
    return (
      <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1'>
        <div className='bg-red-50 row-span-2 col-span-2 imgheight'>1</div>
        <div className='bg-red-300'>2</div>
        <div className='bg-red-500'>3</div>
        <div className='bg-red-700'>4</div>
        <div className='bg-red-50'>1</div>
        <div className='bg-red-300'>2</div>
        <div className='bg-red-500'>3</div>
        <div className='bg-red-700'>4</div>
      </div>
    )
  }
}

export default ImageGrid