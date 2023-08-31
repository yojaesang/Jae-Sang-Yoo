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
            <Link className='no-underline' activeClass="active" to="work1" spy={true} smooth={true} offset={100} duration={500}>Work</Link>
          </li>

          <ul>
            <li className='hover:text-white p-2 pl-3'>
              <Link className='no-underline' activeClass="active" to="work1" spy={true} smooth={true} offset={100} duration={500}>Alterengo</Link>
            </li>
            <li className='hover:text-white p-2 pl-3'>
                <Link className='no-underline' activeClass="active" to="work2" spy={true} smooth={true} offset={100} duration={500}>B tv for Apple tv</Link>
            </li>
            <li className='hover:text-white p-2 pl-3'>
                <Link className='no-underline' activeClass="active" to="work3" spy={true} smooth={true} offset={100} duration={500}>PlayZ</Link>
            </li>
            <li className='hover:text-white p-2 pl-3'>
                <Link className='no-underline' activeClass="active" to="work4" spy={true} smooth={true} offset={100} duration={500}>B tv air</Link>
            </li>
            <li className='hover:text-white p- pl-3'>
                <Link className='no-underline' activeClass="active" to="work5" spy={true} smooth={true} offset={100} duration={500}>Smart 3 mini</Link>
            </li>
            <li className='hover:text-white p-2 pl-3'>
                <Link className='no-underline' activeClass="active" to="work6" spy={true} smooth={true} offset={100} duration={500}>Kids Remote</Link>
            </li>
            <li className='hover:text-white p-2 pl-3'>
                <Link className='no-underline' activeClass="active" to="work7" spy={true} smooth={true} offset={100} duration={500}>Accessories</Link>
            </li>
            <li className='hover:text-white p-2 pl-3'>
                <Link className='no-underline' activeClass="active" to="work8" spy={true} smooth={true} offset={100} duration={500}>Production Guide</Link>
            </li>
            <li className='hover:text-white p-2 pl-3'>
                <Link className='no-underline' activeClass="active" to="work9" spy={true} smooth={true} offset={100} duration={500}>Concept design</Link>
            </li>
            <li className='hover:text-white p-2 pl-3'>
                <Link className='no-underline' activeClass="active" to="work10" spy={true} smooth={true} offset={100} duration={500}>Naver Design Camp</Link>
            </li>

          </ul>

          <li className='hover:text-white py-2'>
            <Link className='no-underline' activeClass="active" to="experience" spy={true} smooth={true} offset={-60} duration={500}>Exprience</Link>
          </li>

          {/* <div className='h-1 border-b'></div> */}
          <li className='hover:text-white py-2'>
              <a href="www.linkedin.com/in/jae-sang-yoo">Linkedin</a>
          </li>
        </ul>
      </div>
    )
  }
}

export default MainTab