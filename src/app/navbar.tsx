'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { useState, useEffect } from 'react'

const Navbar = () => {
  const [isTopbarScrolled, setIsTopbarScrolled] = useState(false)
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTopbarScrolled(true)
        setIsHeaderScrolled(true)
      } else {
        setIsTopbarScrolled(false)
        setIsHeaderScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []) // Empty dependency array ensures that this effect runs only once on component mount

  return (
    <>
      <div
        id="topbar"
        className={`d-flex align-items-center fixed-top ${
          isTopbarScrolled ? 'topbar-scrolled' : ''
        }`}
      >
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope"></i>{' '}
            <Link href="mailto:aniruddhakadia86@gmail.com">
              aniruddhakadia86@gmail.com
            </Link>
            <i className="bi bi-phone"></i> +91 9510511540
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <Link
              href="https://github.com/aniruddhkadia/"
              className="github"
              target="_blank"
            >
              <img src="/assets/img/github-icon.svg" alt="" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/aniruddha-kadia/"
              className="linkedin"
              target="_blank"
            >
              <img src="/assets/img/linkedin-icon.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>

      <header
        id="header"
        className={`fixed-top ${isHeaderScrolled ? 'header-scrolled' : ''}`}
      >
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link href="/">Aniruddha kadia</Link>
          </h1>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <Link
                  className={`link ${pathname === '/' ? 'active' : ''}`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className={`link ${pathname === '/services' ? 'active' : ''}`}
                  href="/services"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  className={`link ${pathname === '/contact' ? 'active' : ''}`}
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <Link href="#appointment" className="appointment-btn">
            <span className="d-none d-md-inline">Get My </span>Resume
          </Link>
        </div>
      </header>
    </>
  )
}
export default Navbar
