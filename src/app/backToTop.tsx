'use client'

import { useEffect } from 'react'

const backToTop = () => {
  useEffect(() => {
    const backToTop = document.querySelector('.back-to-top')

    if (backToTop) {
      const toggleBackToTop = () => {
        if (window.scrollY > 100) {
          backToTop.classList.add('active')
        } else {
          backToTop.classList.remove('active')
        }
      }

      window.addEventListener('load', toggleBackToTop)
      window.addEventListener('scroll', toggleBackToTop)

      return () => {
        window.removeEventListener('load', toggleBackToTop)
        window.removeEventListener('scroll', toggleBackToTop)
      }
    }
  }, [])

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
        onClick={handleBackToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </div>
  )
}
export default backToTop
