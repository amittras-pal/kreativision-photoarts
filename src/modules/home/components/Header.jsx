import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { APP_TITLE } from "../../../hooks/usePageTitle";
import "./Header.scss";

const services = [
  { label: "Photographers", bg: "primary", color: "light" },
  { label: "Graphic Designers", bg: "warning", color: "dark" },
  { label: "Web Designers", bg: "success", color: "light" },
];

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === services.length - 1) setActiveIndex(0);
      else setActiveIndex((i) => i + 1);
    }, 3500);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Container fluid className="header px-0">
      <Container className="header-content h-100">
        <Row className="align-items-center h-100">
          <Col md={7}>
            <h1 className="display-1 title">{APP_TITLE}</h1>
            <div
              className={`w-100 my-2 border-top border-${services[activeIndex].bg}`}
            />
            <h3 className="display-4">
              <span className="fw-bold">We Are </span>
              <br />
              <span className="animation">
                {services.map((service, index) => (
                  <span
                    key={service.label}
                    className={`word display-5 bg-${service.bg} text-${
                      service.color
                    } ps-2 py-1  ${activeIndex === index ? "active" : ""}`}
                  >
                    {service.label}
                  </span>
                ))}
              </span>
            </h3>
          </Col>
          <Col md={5}></Col>
        </Row>
      </Container>
    </Container>
  );
}
