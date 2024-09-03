import React from 'react'
import Userinfop from './List/Userinfop'
import Header from './List/Headerp'
import Healthp from './List/Healthp'
import Contact1p from './List/Contact1p'

export default function Profile() {
  return (
    <div>
        <Header/>
        <Userinfop/>
        <Healthp/>
        <Contact1p/>
    </div>
  )
}
