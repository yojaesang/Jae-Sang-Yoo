import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work22 extends Component {
  render() {
    return (
      <div id='work22'>
      <h1 className='text-xl font-grotesk mt-40 m-10'>Work / 2022</h1>

        {/* SKB - Apple tv */}
      <div className='ml-10'>
        <div className='text-sm text-gray-500'>B tv for Apple tv - UIUX</div>
        <p className='text-sm mt-2'>B tv for Apple tv - UIUX</p>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-4'>
        <div className='row-span-3 h-40 bg-red-300'>0</div>
        <img className='row-span-1 content-stretch' src={process.env.PUBLIC_URL + '/images/alterengo1.jpg'} alt=''/>
        <img className='row-span-1 content-stretch w-full' src={process.env.PUBLIC_URL + '/images/alterengo1.jpg'} alt=''/>
        <div className='row-end-2 h-80 bg-red-300'>1</div>
        <div className='row-span-3  bg-red-300'>2</div>
        <div className='bg-red-300'>3</div>
        <div className='bg-red-300'>4</div>
        

      </div>


      </div>
    )
  }
}

export default Work22