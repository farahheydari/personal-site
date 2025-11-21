
import React from 'react'
import Nav from './component/nav'
import ShowMe from './component/showMe'
import MyProject from './component/myProject'
import AboutMe from './component/aboutMe'
import ConnectMe from './component/connectme'
export default function page() {
  return (
    <div className='overflow-x-hidden'>
      <Nav/>
      <ShowMe/>
      <MyProject id="project"/>
      <AboutMe id="about"/>
      <ConnectMe id="connect"/>
    </div>
  )
}
