import React from 'react'
import './NavigateCard.css'

export default function NavigateCard({heading,paragraph}) {
  return (
    <div className='navigate-card'>
        <div className='firstcontainer'>
            <div className='sub-container'>
                <h2>{heading}</h2>
                <img src='../../../public/assets/img/slashedborder.png' alt="" />
            </div>
            <p>{paragraph}</p>

        </div>
        <button>Learn More <img src='../../../public/assets/img/vector.png' alt="" /></button>

    </div>
  )
}
