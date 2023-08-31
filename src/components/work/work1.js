import React, { Component } from 'react'
import "../imagegrid.css";
import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work1 extends Component {
  render() {
    return (
      <div id='work1'>
        <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / Alterengo UIUX</h1>


        <div className='flex flex-row ml-10'>
          <Iconsvg className='w-6 h-7 mr-1 fill-black'/>
          <div className='text-lg font-medium'>
          <a href="altengo.com">Alterengo</a>
          </div>
        </div>
        <div className='text-lg ml-10'>Web UI Design, Front-end Dev. / 2020.08 - Now</div>
        {/* <p className='text-sm ml-10'>Description</p> */}

        <div className='mt-5 m-10 flex flex-row flex-wrap gap-6 max-md:gap-1'>
          <img className='w-1/3' src={process.env.PUBLIC_URL + '/images/alterengo1.jpg'} alt=''/>
          <img className='w-1/3' src={process.env.PUBLIC_URL + '/images/alterengo2.png'} alt=''/>
        </div>

      </div>
    )
  }
}

export default Work1