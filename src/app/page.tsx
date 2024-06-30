'use client'

import Typed from 'typed.js'
import { useEffect, useRef } from 'react'
import About from './about'
import Skills from './skills'

export default function Home() {
  const typeAnimation = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeAnimation.current, {
      strings: [
        '15+ Years experience in Frontend Development',
        '4+ Years experience in ReactJs, NextJs and Typescript',
      ],
      startDelay: 80,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div
        id="hero"
        className="hero route bg-image"
        style={{ backgroundImage: 'url(assets/img/hero-bg.jpg)' }}
      >
        <div className="overlay-itro"></div>
        <div className="hero-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="hero-title mb-4">I am Aniruddha Kadia</h1>
              <p className="hero-subtitle">
                <span className="typed" ref={typeAnimation}></span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <main id="main">
        <About />
        <Skills />
      </main>
    </>
  )
}
