import Link from 'next/link'
import './skills.css'

const Skills = () => {
  return (
    <div>
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h2>Skills</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <section id="featured-services" className="featured-services">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img src="assets/img/skill/nextjs.svg" alt="" />
                      </div>
                      <h4>
                        <Link href="" className="stretched-link">
                          NextJs
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-md-6 d-flex"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  >
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img src="assets/img/skill/typescript.svg" alt="" />
                      </div>
                      <h4>
                        <Link href="" className="stretched-link">
                          Typescript
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-md-6 d-flex"
                    data-aos="zoom-out"
                    data-aos-delay="400"
                  >
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img src="assets/img/skill/react.svg" alt="" />
                      </div>
                      <h4>
                        <Link href="" className="stretched-link">
                          ReactJs
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-md-6 d-flex"
                    data-aos="zoom-out"
                    data-aos-delay="600"
                  >
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img src="assets/img/skill/tailwind.svg" alt="" />
                      </div>
                      <h4>
                        <Link href="" className="stretched-link">
                          Tailwind
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="row gy-4 mt-3">
                  <div className="col-xl-3 col-md-6 d-flex" data-aos="zoom-out">
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img src="assets/img/skill/html.svg" alt="" />
                      </div>
                      <h4>
                        <Link href="" className="stretched-link">
                          HTML
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-md-6 d-flex"
                    data-aos="zoom-out"
                    data-aos-delay="200"
                  >
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img src="assets/img/skill/css.svg" alt="" />
                      </div>
                      <h4>
                        <Link href="" className="stretched-link">
                          CSS
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-md-6 d-flex"
                    data-aos="zoom-out"
                    data-aos-delay="400"
                  >
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img src="assets/img/skill/bootstrap.svg" alt="" />
                      </div>
                      <h4>
                        <Link href="" className="stretched-link">
                          Bootstrap
                        </Link>
                      </h4>
                    </div>
                  </div>

                  <div
                    className="col-xl-3 col-md-6 d-flex"
                    data-aos="zoom-out"
                    data-aos-delay="600"
                  >
                    <div className="service-item position-relative">
                      <div className="icon">
                        <img src="assets/img/skill/stripe.svg" alt="" />
                      </div>
                      <h4>
                        <Link href="" className="stretched-link">
                          Stripe
                        </Link>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Skills
