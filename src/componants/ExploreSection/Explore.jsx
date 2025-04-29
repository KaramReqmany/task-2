import React from 'react'
import './Explore.css'
import TextContainer from '../TextContainer/TextContainer'
import NavigateCard from '../NavigateCard/NavigateCard'

export default function Explore() {
    const pagesInfo = [
        {
            heading: 'About Us',
            paragraph: 'Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.'
        },
        {
            heading: 'Academics',
            paragraph: 'Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.'
        },
        {
            heading: 'Student Life',
            paragraph: 'Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.'
        },
        {
            heading: 'Admissions',
            paragraph: 'Learn about our Enrollment Process and how to secure your childs place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.'
        }
    ]
    return (
        <div className='explore-section'>
            <TextContainer topcontent={'Explore More'} heading={"Navigate through our Pages"} paragraph={'Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school'} />
            <div className='cardscontainer1'>
                {
                    pagesInfo.slice(0,2).map((item, index) =>
                        <NavigateCard key={index} heading={item.heading} paragraph={item.paragraph} />
                    )
                }

            </div>
            <div className='cardscontainer2'>
                {
                    pagesInfo.slice(2,4).map((item, index) =>
                        <NavigateCard key={index} heading={item.heading} paragraph={item.paragraph} />
                    )
                }

            </div>
        </div>
    )
}
