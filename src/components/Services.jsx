import { Palette, Code, Briefcase } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Product Design",
      price: "$90",
      period: "per hour",
    },
    {
      icon: Code,
      title: "Frontend Development",
      price: "$100",
      period: "per hour",
    },
    {
      icon: Briefcase,
      title: "Branding",
      price: "$80",
      period: "per hour",
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title mb-8">Services</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-left">
              <div className="service-icon">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
            <div
              className="service-divider"
              style={{
                flex: 1,
                borderBottom: "1px solid #eee",
                margin: "0 16px",
              }}
            />

            <div className="service-price">
              <span className="text-muted text-sm">from </span>
              <span className="price">{service.price}</span>
              <span className="period text-muted text-sm">
                {" "}
                {service.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
