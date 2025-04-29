import React from 'react'
import NavAdmission from '../NavAdmission/NavAdmission'
import Navbar from '../Navbar/Navbar'
import './Header.css'

export default function Header() {
    return (
        <div className='homeheader'>
            <NavAdmission />
            <Navbar />
        </div>
    )
}
