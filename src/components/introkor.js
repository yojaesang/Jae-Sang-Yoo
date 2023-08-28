import React, { Component } from 'react'
import "./textkor.css";

export class IntroKor extends Component {
  render() {
    return (
        <div className='m-10'>
            <div className='text-xs font-light font-grotesk text-gray-500'>KOR</div>
            <div className='text-base break-keep'>서울에서 활동하고 있는 디자이너, 메이커이자, 전략가 입니다. <br></br>
            서로 연결 고리가 없어보이는 두 점을 잇는 일,
            규칙이랄게 없이 산재되어 연결된 선들 사이에서 인과를 찾는 일, 그리고 그것의 쓸모를 찾는 일에 흥미를 느낍니다.
            끊임없이 파헤치고 정의 내려야 하는, 다소 지루한 디자인 과정 끝에 문제의 본질을 해결하는 제품을 만들고자 합니다.
            </div>

        </div>
    )
  }
}

export default IntroKor