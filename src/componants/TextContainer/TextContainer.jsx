import React from 'react'
import './TextContainer.css'

export default function TextContainer({ topcontent, heading, paragraph }) {
    return (
        <div className='text-container'>
            <div className='topcontent'>
                <p>{topcontent}</p>

            </div>
            <h1>
                {heading}
            </h1>
            <p className='paragraph'>{paragraph}</p>

        </div>
    )
}
