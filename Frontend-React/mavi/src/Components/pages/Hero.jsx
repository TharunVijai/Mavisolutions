import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id='hero'>
        <div className="hero-content">
          <p className="tag">Engineering High Performance Platforms</p>
          <h1>Modern Cloud & DevOps Solutions</h1>
          <p className="desc">
            Build scalable, secure and reliable digital products with modern
            cloud infrastructure and automation.
          </p>

          <div className="hero-buttons">
            <button className="primary">Start Project</button>
            <button className="secondary">Learn More</button>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-box">
            <h3>Cloud Infrastructure</h3>
            <p>Fast deployment and reliable scaling.</p>
          </div>

          <div className="card-box">
            <h3>DevOps Automation</h3>
            <p>CI/CD workflows with monitoring tools.</p>
          </div>
        </div>
      </section>
  )
}

export default Hero