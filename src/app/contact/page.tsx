// 'use client'

import FaqContainer from './faqContainer'
import TestimonialsSlider from './testimonials'
import ContactUs from './contactUs'

import '../contact/contact.css'

import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact - Aniruddha Kadia',
}

const Contact = () => {
  return (
    <>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Contact Page</h2>
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Contact Page</li>
            </ol>
          </div>
        </div>
      </section>

      <FaqContainer />

      <TestimonialsSlider />

      <ContactUs />
    </>
  )
}
export default Contact
