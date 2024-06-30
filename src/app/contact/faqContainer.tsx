'use client'

import { useState } from 'react'

import FaqToggle from './faqToggle'

const FaqContainer = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null)

  const toggleFaq = (index: any) => {
    setOpenFaqIndex(index === openFaqIndex ? null : index)
  }

  const faqs = [
    {
      question: 'Can you tell me about yourself?',
      answer:
        'I have experience in transforming design into code using HTML, CSS, JS, Bootstrap, Tailwind CSS framework. I am proficient in ReactJs, NextJs, TypeScript. I have provide project estimation and timeline. Manage six to seven person team. I am committed to resolving error efficiently, code review, bug fixing. I have knowledge of cross-browser compatibility, responsive design, page speed optimization, SEO friendly, and accessibility compliance website. Apart from my job I am working freelancing projects and conducting seminar in coaching classes to guide student.',
    },
    {
      question:
        'How much experience do you have in frontend development, specifically with React.js, Next.js, and TypeScript?',
      answer:
        'I have 15+ Years experience in frontend development, 4+ Years experience in ReactJs, NextJs and TypeScript.',
    },
    {
      question:
        ' Could you please describe your experience managing teams in your previous roles?',
      answer:
        'Yes, I have extensive experience managing teams in my past roles. In one instance, I led a team of six to seven individuals, overseeing various aspects such as conducting code reviews, resolving errors, and providing estimates and timelines for projects.',
    },
  ]

  return (
    <>
      <section id="faq" className="faq section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <ul className="faq-list">
                {faqs.map((faq, index) => (
                  <li key={index}>
                    <FaqToggle
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={index === openFaqIndex}
                      toggleFaq={() => toggleFaq(index)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default FaqContainer
