import React from 'react'
import './Questions.css'
import TextContainer from '../TextContainer/TextContainer'
import Accordion from '../Accordion/Accordion'

export default function Questions() {
  const questions = [
    {
      question: 'What are the school hours at Little Learners Academy?',
      answer: 'Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.'
    },
    {
      question: 'Is there a uniform policy for students?',
      answer: 'Yes, we have a uniform policy for students. We encourage students to wear comfortable, age-appropriate clothing that is appropriate for the classroom and outdoor activities.'
    },
    {
      question: 'What extracurricular activities are available for students?',
      answer: 'We offer a variety of extracurricular activities for students, including sports, music, art, and more.'
    },
    {
      question: 'What extracurricular activities are available for students?',
      answer: 'We offer a variety of extracurricular activities for students, including sports, music, art, and more.'
    },
    {
      question: 'How do you handle food allergies and dietary restrictions?',
      answer: 'We have a dedicated team of staff who are trained to handle food allergies and dietary restrictions.'
    },
    {
      question: 'What is the teacher-to-student ratio at Little Learners Academy?',
      answer: 'we have an appropriate ratio with more than enough teachers.'
    },
    {
      question: 'How do you handle discipline and behavior management?',
      answer: 'we take a proactive approach to discipline and behavior management, using positive reinforcement and redirection.'
    },
    {
      question: 'How do I apply for admission to Little Learners Academy?',
      answer: 'You can apply for admission to Little Learners Academy by filling out our online application form.'
    }
  ]
  return (
    <div className='questions-section'>
      <TextContainer topcontent={'Solutions For The Doubts'} heading={"Frequently Asked Questions"} paragraph={'Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your childs education.'} />
      <div className='questions-container'>
        <div className='container1'>
          {
            questions.slice(0, 4).map((item, index) =>
              <Accordion key={index} question={item.question} answer={item.answer} />
            )
          }

        </div>
        <div className='container1'>
          {
            questions.slice(4, 8).map((item, index) =>
              <Accordion key={index} question={item.question} answer={item.answer} />
            )
          }

        </div>

      </div>
    </div>
  )
}
