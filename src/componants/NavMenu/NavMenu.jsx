import React, { useState } from 'react'
import './NavMenu.css'


export default function NavMenu({ items }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [btnActive, setbtnActive] = useState(false);
    return (
        <>
            <div className='navmenu'>
                <ul>
                    {
                        items.map(
                            (item, index) => (
                                <li onClick={() => setActiveIndex(index)} className={` pages ${item === 'Contact' ? "contact" : ''}  ${activeIndex == index ? 'activepage' : ''}`} key={index}>{item}</li>
                            )
                        )
                    }

                </ul>

            </div>
            <button onClick={() => setbtnActive(!btnActive)} className='menubtn'>
                <img src="../../../public/assets/img/bars.png" alt="" />
            </button>
            {
                btnActive &&
                <div className='hiddenmenu'>
                    <ul>
                        {
                            items.map(
                                (item, index) => (
                                    <li onClick={() => setActiveIndex(index)} className={` pages ${item === 'Contact' ? "contact" : ''}  ${activeIndex == index ? 'activepage' : ''}`} key={index}>{item}</li>
                                )
                            )
                        }

                    </ul>


                </div>
            }

        </>

    )
}
