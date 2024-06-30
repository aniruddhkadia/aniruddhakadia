import Link from 'next/link'
import '../services.css'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'MM and Sons High School Project - Aniruddha Kadia',
}

const porfolioDetailOne = () => {
  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>MM and Sons High School</h2>
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>Project Details Page</li>
            </ol>
          </div>
        </div>
      </section>

      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <div className="portfolio-details-slider swiper">
                <div className="swiper-slide">
                  <img src="../assets/img/portfolio/portfolio-1.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: Web design
                  </li>
                  <li>
                    <strong>Client</strong>: MM and Sons High School
                  </li>
                  <li>
                    <strong>Location</strong>: Chikhodra, Gujarat, 388320 India{' '}
                  </li>
                  <li>
                    <strong>Type</strong>: Charitable Trust
                  </li>
                  <li>
                    <strong>Platform</strong>: WordPress
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 April, 2022
                  </li>
                  <li>
                    <strong>Project URL</strong>:
                    <Link
                      href="https://www.mmandsonshighschool.in/"
                      target="_blank"
                    >
                      www.mmandsonshighschool.in
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <p>
                  The project involves the development and management of MM and
                  Sons High School's website. As a charitable trust, the focus
                  is on providing information about the school's mission,
                  vision, programs, and activities to the community. The website
                  serves as a digital platform to showcase the school's
                  initiatives, share updates, and engage with stakeholders.
                  Utilizing WordPress allows for user-friendly content
                  management and flexibility in website customization to meet
                  the specific needs of the school. Over the past four years,
                  the website has been effectively maintained to ensure accurate
                  and up-to-date information is available to visitors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default porfolioDetailOne
