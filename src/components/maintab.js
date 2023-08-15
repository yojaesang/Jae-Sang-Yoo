import React, { Component } from 'react'
import "./maintab.css";

export class MainTab extends Component {
  render() {
    return (
      <div className='w-full h-screen fixed bg-black'>
        <div className='h-40'></div>
        <ul className='m-4 text-sm text-white font-grotesk'>
          <li className='hover:text-gray-500 py-2'>up</li>
          <li className='hover:text-gray-500 py-2'>work</li>
        </ul>
      </div>
    )
  }
}

export default MainTab