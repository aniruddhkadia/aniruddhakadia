import './about.css'

const About = () => {
  return (
    <>
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="about-img">
                      <img
                        src="assets/img/me.jpg"
                        className="img-fluid rounded b-shadow-a"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About me</h5>
                      </div>
                      <p className="lead">
                        With a comprehensive background spanning 15+ years in
                        website design and development, I have honed my skills
                        in creating engaging and user-friendly digital
                        experiences. I began my journey as a graphic designer
                        and transitioned into a senior front end developer. My
                        resume demonstrates the evolution of my skills and
                        career growth.
                      </p>
                      <div className="about-info">
                        <p>
                          <span className="title-s">Name: </span>
                          <span>Aniruddha Kadia</span>
                        </p>
                        <p>
                          <span className="title-s">Profile: </span>
                          <span>Senior FrontEnd developer(NextJs)</span>
                        </p>
                        <p>
                          <span className="title-s">Email: </span>
                          <span>aniruddhakadia86@gmail.com</span>
                        </p>
                        <p>
                          <span className="title-s">Phone: </span>
                          <span>(+91) 9510511540</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default About
