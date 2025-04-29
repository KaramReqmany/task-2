import React, { useState } from 'react'
import './Accordion.css'

export default function ({ question, answer }) {
    const [accordionState, setAccordionState] = useState(false);

    return (
        <div className={accordionState == true ? 'accordion-open' : 'accordion-closed'} >
            {
                accordionState == false &&
                <p className='question'>{question}</p>

            }
            {
                accordionState == true &&
                <div className='text-section'>
                    <p className='question'>{question}</p>
                    {
                        accordionState == true &&
                        <p className='answer'>{answer}</p>

                    }

                </div>
            }
            <button className='showbtn' onClick={() => setAccordionState(!accordionState)}>
                <img src={accordionState == true ? '../../../public/assets/img/hide.png' : '../../../public/assets/img/show.png'} alt="" />
            </button>


        </div>
    )
}
