'use client'

import React, { useRef, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import 'swiper/css'
import 'swiper/css/pagination'

import './contact.css'

import { Autoplay, Pagination } from 'swiper/modules'

const TestimonialsSlider = () => {
  return (
    <>
      <div
        className="testimonials paralax-mf bg-image"
        style={{ backgroundImage: `url(assets/img/testimonials-bg.jpg)` }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="testimonial-box">
                    <div className="author-test">
                      <img
                        src="assets/img/testimonial-1.jpg"
                        alt=""
                        className="rounded-circle b-shadow-a"
                      />
                      <span className="author">
                        Vilish Patel <br />
                        <span className="desig">Australia</span>
                      </span>
                    </div>
                    <div className="content-test">
                      <p className="description lead">
                        Working with Aniruddha was a game-changer for our online
                        presence. Their expertise in website development
                        transformed our outdated site into a sleek,
                        user-friendly platform that perfectly reflects our
                        brand. The Aniruddha's professionalism and dedication to
                        our project were unmatched. Highly recommended!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-slide">
                    <div className="testimonial-box">
                      <div className="author-test">
                        <img
                          src="assets/img/testimonial-2.jpg"
                          alt=""
                          className="rounded-circle b-shadow-a"
                        />
                        <span className="author">
                          Bharat Patel <br />
                          <span className="desig">Anand, Gujarat, India</span>
                        </span>
                      </div>
                      <div className="content-test">
                        <p className="description lead">
                          Aniruddha's dedication and efficiency in creating a
                          stellar website for our school in Anand truly set him
                          apart. His professionalism and pleasant demeanor made
                          the entire process a breeze. We are immensely grateful
                          for his outstanding work and highly recommend him for
                          any website development project.
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestimonialsSlider
