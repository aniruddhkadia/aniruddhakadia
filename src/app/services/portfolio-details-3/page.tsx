import Link from 'next/link'
import '../services.css'

import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Neeva Infotech Project - Aniruddha Kadia',
}

const porfolioDetailThree = () => {
  return (
    <div>
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Neeva Infotech</h2>
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
                  <img src="../assets/img/portfolio/portfolio-3.jpg" alt="" />
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
                    <strong>Client</strong>: Neeva Infotech Pty Ltd.
                  </li>
                  <li>
                    <strong>Location</strong>: Banna Ave, Griffith NSW 2680,
                    Australia
                  </li>
                  <li>
                    <strong>Type</strong>: Software Development
                  </li>
                  <li>
                    <strong>Platform</strong>: Bootstrap
                  </li>
                  <li>
                    <strong>Project date</strong>: 01 May, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:
                    <Link href="https://neevainfotech.com/">
                      www.neevainfotech.com
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <p>
                  Neeva Infotech, a software development company based in
                  Australia, has undertaken a project to develop a website for a
                  client's business presence in Australia. The website serves as
                  a digital platform for the client to establish and showcase
                  their online presence, providing information about their
                  products, services, and offerings to the Australian market.
                  The project involves designing and developing a website
                  tailored to the client's business requirements and target
                  audience, ensuring functionality, user-friendliness, and
                  aesthetics. Neeva Infotech's expertise in website development
                  enables them to create a professional and engaging online
                  presence for their client, helping them effectively reach and
                  engage with their target customers in the Australian market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default porfolioDetailThree
