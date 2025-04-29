import React from 'react'
import './TestimonialCard.css'

export default function TestimonialCard({name,text}) {
  return (
    <div className='testimonial-card'>
        <div className='profile'>
            <div className='profile-img'>
                <img src='../../../public/assets/img/profile1.png' alt="" />

            </div>
            <p>{name}</p>

    


        </div>
        <div className='rating'>
            <img src="../../../public/assets/img/stars.png" alt="" />

        </div>
        <p>{text}</p>

    </div>
  )
}
