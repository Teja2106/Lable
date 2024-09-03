import React from 'react'
import Header2 from './list/Header2'
import Userinfo2 from './list/Userinfo2'
import Contact1s from './list/Contact1s'
import Footer from '../Footer'
import Health2s from './list/Health2s'
import Doctor2s from './list/Doctor2s'
import Navbar2s from './list/Navbar2s'

export default function Static() {
  return (
    <div>
      <Navbar2s/>
        < Header2/>
        <Userinfo2/>
        <Health2s/>
        <Contact1s/>
        <Doctor2s/>
        <Footer/>
    </div>
  )
}
