import React from 'react'
import './Hero.css'

export default function () {
  return (
    <div className='hero'>
      <div className='imgcontainer'>

        <img className='mainimg' src="../../../public/assets/img/HeroImage.png" alt="" />
      </div>
      <div className='herotext'>
        <div className='subcontainer'>
          <div className='innersubcontainer'>
            <div className='innersubcontainer2'>
              <div className='textcon1'>Welcome to Little Learners Academy</div>
              <div className='textcon2'><h1>Where Young Minds Blossom and <span>Dreams Take Flight.</span></h1> </div>
            </div>
            <div className='textcon3'>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!</div>

          </div>
        </div>
        <div className='achievements'>
          <div className='ach1'>
            <h1>+7000</h1>
            <p>Students Passed Out</p>
          </div>
          <div className='ach1'>
            <h1>+37</h1>
            <p>Awards & Recognitions</p>
          </div>
          <div className='ach1'>
            <h1>+15</h1>
            <p>Experience Educators</p>
          </div>

        </div>

      </div>
    </div>
  )
}
