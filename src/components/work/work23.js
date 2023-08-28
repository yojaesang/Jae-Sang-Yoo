import React, { Component } from 'react'
import "../imagegrid.css";
import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work23 extends Component {
  render() {
    return (
      <div id='work23'>
      <h1 className='text-xl font-grotesk mt-40 m-10'>Work / 2023</h1>

        {/* Alterengo */}
      <div className='flex flex-row ml-10'>
        <Iconsvg className='w-4 h-5 mr-1 fill-gray-500'/>
        <div className='text-sm text-gray-500'>
        <a href="altengo.com">Alterengo</a> - UIUX, Front-end Dev
        </div>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 flex flex-row flex-wrap'>
        <img className='w-1/3' src={process.env.PUBLIC_URL + '/images/alterengo1.jpg'} alt=''/>
      </div>

        {/* SKB - Apple tv */}
      <p className='text-sm ml-10 mt-20 text-gray-500'>B tv for Apple tv - UIUX</p>
      <p className='text-sm ml-10 mt-2'>B tv for Apple tv - UIUX</p>

      <div className='mt-5 m-10 flex flex-wrap gap-4 content-stretch'>
        <div className='bg-red-50 w-80'>1</div>
        <div className='bg-red-300 w-80 h-20'>2</div>
        <div className='bg-red-500 w-80 h-40'>3</div>
        <div className='bg-red-700 w-20 h-10'>4</div>
        <div className='bg-red-50 w-80 h-20'>1</div>
        <div className='bg-red-300'>2</div>
        <div className='bg-red-500'>3</div>
        <div className='bg-red-700'>4</div>
      </div>

      </div>
    )
  }
}

export default Work23