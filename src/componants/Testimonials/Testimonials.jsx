import React from 'react'
import './testimonials.css'
import TextContainer from '../TextContainer/TextContainer'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import Slider from '../Slider/Slider';

export default function Testimonials() {
  const testimonialCards = [
    <TestimonialCard
      name="Jennifer B"
      text="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
    />,
    <TestimonialCard
      name="David K"
      text="Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
    />,
    <TestimonialCard
      name="Emily L"
      text="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
    />,
  ];
  return (
    <div className='testimonials'>
      <TextContainer topcontent={'Their Happy Words 🤗'} heading={"Our Testimonials"} paragraph={'Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.'} />
      <Slider cards={testimonialCards} />
    </div>
  )
}
