// 'use client'
import Link from 'next/link'
import './services.css'

import { Metadata } from 'next'
import Resume from './resume'
import Project from './project'

export const metadata: Metadata = {
  title: 'Services - Aniruddha Kadia',
}

const Services = () => {
  return (
    <>
      <main id="main2">
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Services Page</h2>
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>Services Page</li>
              </ol>
            </div>
          </div>
        </section>

        <Resume />

        <Project />
      </main>
    </>
  )
}
export default Services
