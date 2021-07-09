import React from "react";
// reactstrap components
import { Row, 
        Col, 
        Button,
        UncontrolledCollapse,
        NavbarBrand,
        Navbar,
        Nav,
        Container,} from "reactstrap";

import './SectionHeader3.css';

// core components

function SectionCards() {
  return (
    <>
    <div className="nav-section">
        <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
                <NavbarBrand className="mb-0" href="www.creative-tim.com">
                <UncontrolledCollapse navbar toggler="#navbarSupportedContent2">
                        <Nav className="ml-auto" navbar>
                        <Button
                            className="btn-neutral"
                            color="link"
                            href="#features"
                        >
                            About Us
                        </Button>
                        <Button
                            className="btn-neutral"
                            color="link"
                            href="#pricing"
                        >
                            Pricing
                        </Button>
                        <Button
                            className="btn-neutral"
                            color="link"
                            href="#testimonials"
                        >
                            Testimonial
                        </Button>
                        <Button
                            className="btn-neutral"
                            color="link"
                            href="#contact-us"
                        >
                            Contact
                        </Button>
                        </Nav>
                    </UncontrolledCollapse>
                </NavbarBrand>
                    <button
                        className="navbar-toggler"
                        id="navbarSupportedContent2"
                        type="button"
                    >
                        <span className="navbar-toggler-bar" />
                        <span className="navbar-toggler-bar" />
                        <span className="navbar-toggler-bar" />
                    </button>
                    
                    </Container>
                </Navbar>
    </div>
      <div className="section section-cards section-gold">
        <div className="codrops-header">
          <Row>
            <Col lg="4" md="6">
              <div className="section-description">
                <h3 className="title1">Awaken Your Fashionista</h3>
                <h6 className="category">One Card for Every Problem</h6>
                <h5 className="description">
                encourages women to prioritize themselves through style, self-love, and by showcasing individuality. Through an intentional process you will learn different ways to show up for your best self. Prioritizing yourself allows success in every area of your life. AYF helps women achieve a new appreciation of self, style and life!
                </h5>
              </div>
            </Col>
          </Row>
        </div>
        <section className="section-intro">
          <div className="isolayer isolayer--deco1 isolayer--shadow js">
            <ul className="grid grid--loaded">
              <li className="grid__item first-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/Crystal%20AYF%20original%20Photos%2FScreen%20Shot%202021-07-07%20at%2011.24.03%20PM%20(1).png?alt=media&token=75181eba-37af-40d4-b89e-4de584761256"
                  />
                </a>
              </li>
              <li className="grid__item second-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/Crystal%20AYF%20original%20Photos%2FScreen%20Shot%202021-07-07%20at%2011.27.44%20PM%20(1).png?alt=media&token=3f7a5433-f726-4136-9130-b99f0d240e14"
                  />
                </a>
              </li>
              <li className="grid__item third-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/Crystal%20AYF%20original%20Photos%2FScreen%20Shot%202021-07-07%20at%2011.23.22%20PM%20(1).png?alt=media&token=b6c3d36a-dd27-4740-b758-14120ec4b623"
                  />
                </a>
              </li>
              <li className="grid__item fourth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/Crystal%20AYF%20original%20Photos%2FScreen%20Shot%202021-07-07%20at%2011.25.41%20PM%20(1).png?alt=media&token=444f7fdb-afef-4861-a891-5558cb6bff0b"
                  />
                </a>
              </li>
              <li className="grid__item fifth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/Crystal%20AYF%20original%20Photos%2FScreen%20Shot%202021-07-07%20at%2011.30.33%20PM%20(2).png?alt=media&token=37b4e704-24ed-42ff-9f02-667846b28d76"
                  />
                </a>
              </li>
              <li className="grid__item sixth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/Crystal%20AYF%20original%20Photos%2FScreen%20Shot%202021-07-07%20at%2011.28.04%20PM%20(1).png?alt=media&token=f1e76ef6-2f3f-466a-9cb8-cec52fc2351c"
                  />
                </a>
              </li>
              <li className="grid__item seventh-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/IMG_2265.jpg?alt=media&token=fe60f03e-5129-4831-9f68-26712f6763d8"
                  />
                </a>
              </li>
              <li className="grid__item eight-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/Crystal%20AYF%20original%20Photos%2FScreen%20Shot%202021-07-07%20at%2011.24.39%20PM%20(1).png?alt=media&token=8e371ad6-aacd-4a34-8fe7-c39d4097928e"
                  />
                </a>
              </li>
              <li className="grid__item ninth-card">
                <a
                  className="grid__link"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/Crystal%20AYF%20original%20Photos%2FScreen%20Shot%202021-07-07%20at%2011.27.17%20PM%20(1).png?alt=media&token=383e4c59-dff9-4c7e-945e-a1b4266ac682"
                  />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default SectionCards;