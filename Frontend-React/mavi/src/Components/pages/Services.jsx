import React from 'react'

const Services = () => {

  const services = [

    {
      title: "Cloud Engineering",
      desc:
        "Scalable cloud-native infrastructure setup using modern deployment architectures.",
    },

    {
      title: "DevOps Automation",
      desc:
        "CI/CD pipelines, deployment automation and streamlined software delivery workflows.",
    },

    {
      title: "Site Reliability Engineering",
      desc:
        "Monitoring, observability, uptime optimization and production reliability improvements.",
    },

    {
      title: "Infrastructure as Code",
      desc:
        "Automated infrastructure provisioning using Terraform and cloud automation tools.",
    },

    {
      title: "Container Orchestration",
      desc:
        "Docker and Kubernetes based deployment environments for scalable applications.",
    },

    {
      title: "Cloud Migration",
      desc:
        "Migration of legacy systems and applications into secure cloud platforms.",
    },

    {
      title: "Security & Compliance",
      desc:
        "Cloud security best practices, access control and infrastructure compliance solutions.",
    },

    {
      title: "Performance Optimization",
      desc:
        "System tuning, load optimization and high availability architecture implementation.",
    },

  ];

  return (

    <section className="services" id="services">

      <h2>Our Services</h2>

      <p className="service-subtitle">
        Modern engineering solutions designed for scalable,
        secure and reliable digital platforms.
      </p>

      <div className="service-grid">

        {
          services.map((service, index) => (

            <div
              className="service-card"
              key={index}
            >

              <h3>
                {service.title}
              </h3>

              <p>
                {service.desc}
              </p>

            </div>
          ))
        }

      </div>

    </section>
  );
};

export default Services;