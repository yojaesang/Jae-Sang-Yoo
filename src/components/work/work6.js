import React, { Component } from 'react'
import "../imagegrid.css";
// import { ReactComponent as Iconsvg } from '../../icon/link.svg';

export class Work6 extends Component {
  render() {
    return (
      <div id='work6'>
      <h1 className='text-xl font-grotesk mt-32 m-10 text-gray-400'>Work / Kids Remote</h1>


      <div className='m-10'>
        <div className='text-lg font-bold'>Kids Remote</div>
        <div className='text-lg'>PUI Design / 2021.12 - 2022.03</div>
        <ul className='w-1/2 max-md:w-full text-sm mt-2 list-disc'>
          <li>Conducted in-depth interviews with the kids ages 3 to 13 to find out target kids' hand size.</li>
          <li>Collaborated with the 3D design agency on 3D-modeling the shape of the charater, applying the colors and materials kids prefer.</li>
          <li>Participated in designing PUI as buttons size and LED lights and Remote control key map based on the Kids' grip position and reach, the usage of buttons, purpose of the each button.</li>
        </ul>
      </div>
      {/* <p className='text-sm ml-10'>Description</p> */}

      <div className='mt-5 m-10 grid grid-cols-3 gap-6 max-md:gap-1'>
        <div>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids1.png'} alt=''/>
         <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids2.png'} alt=''/>
         
        </div>

        <div className=''>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids3.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids4.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids5.png'} alt=''/>
        </div>

        <div>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids6.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids7.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids8.png'} alt=''/>
        <img className='content-stretch mb-6 max-md:mb-1' src={process.env.PUBLIC_URL + '/images/kidsremote/kids9.png'} alt=''/>
        {/* <img className='content-stretch mb-6' src={process.env.PUBLIC_URL + '/images/kidsremote/kids10.jpg'} alt=''/> */}
        </div>
        
      </div>


      </div>
    )
  }
}

export default Work6