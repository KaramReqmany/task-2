import React from 'react'
import './Navbar.css'
import NavMenu from '../NavMenu/NavMenu'

export default function Navbar() {
  return (
    <div className='navbarr'>
        <div className='logo'>
            <img src="../../../public/assets/img/logo.png" alt="" />
            <a href="#Home">Little Learners</a> 
        </div>
        <NavMenu items={['Home','About Us','Academics','Admissions','Student Life','Contact']} />

    </div>
  )
}
