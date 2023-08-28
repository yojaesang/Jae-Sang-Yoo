import React, { Component } from 'react'
import "./maintab.css";
import { ReactComponent as Iconsvg } from '../../icon/up.svg';
import { Link } from "react-scroll"


export class MainTab extends Component {
  render() {
    return (

      <div className='w-full h-screen fixed bg-black'>

        <div className='h-40'></div>

        <ul className='m-4 text-sm text-gray-500 font-grotesk cursor-pointer'>

          <li className='hover:text-white py-2'>
            <Link activeClass="active" to="up" spy={true} smooth={true} offset={0} duration={500}>
              <Iconsvg className='w-5 h-5 fill-gray-500 hover:fill-white'/>
            </Link>
          </li>

          <li className='hover:text-white py-2'>
            <Link className='no-underline' activeClass="active" to="work23" spy={true} smooth={true} offset={-20} duration={500}>Work</Link>
          </li>

          <ul>
            <li className='hover:text-white p-2'>
              <Link className='no-underline' activeClass="active" to="work23" spy={true} smooth={true} offset={-20} duration={500}>2023</Link>
            </li>
            <li className='hover:text-white p-2'>
                <Link className='no-underline' activeClass="active" to="work22" spy={true} smooth={true} offset={-20} duration={500}>2022</Link>
            </li>
            <li className='hover:text-white p-2'>
                <Link className='no-underline' activeClass="active" to="work21" spy={true} smooth={true} offset={-20} duration={500}>2021</Link>
            </li>
            <li className='hover:text-white p-2'>
                <Link className='no-underline' activeClass="active" to="work20" spy={true} smooth={true} offset={-20} duration={500}>2020</Link>
            </li>
            <li className='hover:text-white p-2'>
                <Link className='no-underline' activeClass="active" to="work19" spy={true} smooth={true} offset={-20} duration={500}>2019</Link>
            </li>
            <li className='hover:text-white p-2'>
                <Link className='no-underline' activeClass="active" to="work18" spy={true} smooth={true} offset={-20} duration={500}>2018</Link>
            </li>
          </ul>

          <li className='hover:text-white py-2'>
            <Link className='no-underline' activeClass="active" to="experience" spy={true} smooth={true} offset={-20} duration={500}>Exprience</Link>
          </li>

          <li className='hover:text-white py-2'>
            <Link className='no-underline' activeClass="active" to="awards" spy={true} smooth={true} offset={-20} duration={500}>Awards & Patents</Link>
          </li>

          {/* <div className='h-1 border-b'></div> */}
          <li className='hover:text-white py-2'>Linkedin
          
          </li>
        </ul>
      </div>
    )
  }
}

export default MainTab