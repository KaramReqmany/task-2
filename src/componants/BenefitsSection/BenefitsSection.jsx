import React from 'react'
import './BenefitsSection.css'
import BenefitCard from '../BenefitCard/BenefitCard'
import { Col, Row } from 'react-bootstrap'
import TextContainer from '../TextContainer/TextContainer'

export default function BenefitsSection() {
    const benefits = [{
        title: 'Holistic Learning Approach',
        description: 'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.',
        image: '../../../public/assets/img/Icon1.png'

    }
        ,
    {
        title: 'Experienced Educators',
        description: 'Our passionate and qualified teachers create a supportive and stimulating learning environment.',
        image: '../../../public/assets/img/Icon2.png'


    }
        ,
    {
        title: 'Nurturing Environment',
        description: 'We prioritize safety and provide a warm and caring atmosphere for every child.',
        image: '../../../public/assets/img/Icon3.png'

    }
        ,
    {
        title: 'Play-Based Learning',
        description: 'We believe in the power of play to foster creativity, problem-solving skills, and imagination.',
        image: '../../../public/assets/img/Icon4.png'

    }
        ,
    {
        title: 'Individualized Attention',
        description: 'Our small class sizes enable personalized attention, catering to each childs unique needs.',
        image: '../../../public/assets/img/Icon5.png'

    }
        ,
    {
        title: 'Parent Involvement',
        description: 'We foster a strong parent-school partnership to ensure seamless communication and collaboration.',
        image: '../../../public/assets/img/Icon6.png'

    }

    ]
    return (
        <div className='benefits-section'>
            <div className='benefits-section-container'>
                <TextContainer topcontent={'Children Deserve Bright Future'} heading={'Our Benefits'} paragraph={"With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your childs future"} />
                <div className='card-container'>

                    <div className='con'>
                        {benefits.slice(0, 3).map((item, index) => (

                            <BenefitCard title={item.title} description={item.description} image={item.image} />

                        ))}

                    </div>
                    <div className='con'>
                        {benefits.slice(0, 3).map((item, index) => (

                            <BenefitCard key={index} title={item.title} description={item.description} image={item.image} />

                        ))}

                    </div>
                </div>


            </div>
        </div>
    )
}
