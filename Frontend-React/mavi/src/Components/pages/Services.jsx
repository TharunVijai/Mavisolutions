import React from 'react'

const Services = () => {
  return (
    <section className="services" id='services'>
        <h2>Our Services</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Cloud Engineering</h3>
            <p>
              Infrastructure setup and deployment pipelines for modern apps.
            </p>
          </div>

          <div className="service-card">
            <h3>Site Reliability</h3>
            <p>
              Monitoring, observability and uptime optimization for products.
            </p>
          </div>

          <div className="service-card">
            <h3>Automation</h3>
            <p>
              Automated delivery systems and workflow integrations.
            </p>
          </div>
        </div>
      </section>
  )
}

export default Services
