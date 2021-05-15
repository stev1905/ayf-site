import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

import './SectionPricing.css';

// core components

function SectionPricing() {
 /*  const [activePill, setActivePill] = React.useState("1");
  // pills for the last pricing
  const [pillActive, setPillActive] = React.useState("personal"); */
  return (
    <>
      <div className="section section-pricing cd-section" id="pricing">
        {/* ********* PRICING 1 ********* */}
        <div className="pricing-1 section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick Your Level Of Awakening</h2>
                <h5 className="description">
                See our selection of package options. All packages include email correspondences and check-ins.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="3">
                <Card className="card-pricing" data-color="orange">
                  <CardBody>
                  <CardTitle tag="h5">Fashionista Basic</CardTitle>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-basket" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$225</CardTitle>
                    <p className="card-description">
                    Closet Haul: Together we will Discard, Keep, Create, & Style together in the comfort of your home or via webcam. 
                    </p>
                    <CardFooter>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing" data-color="yellow">
                  <CardBody>
                  <CardTitle tag="h5">Fashionista Trendsetter</CardTitle>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-watch-time" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$300</CardTitle>
                    <p className="card-description">
                    Closet Haul + 1 collaborative shopping trip. Discard, Keep, Create, Collaborate (shopping trip), Style
                    </p>
                    <CardFooter>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing" data-color="green">
                  <CardBody>
                  <CardTitle tag="h5">Fashionista FULL AWAKENING</CardTitle>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-settings" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$425</CardTitle>
                    <p className="card-description">
                    Closet Haul + 2 collaborative shopping trips. Discard, Keep, Create, Collaborate (shopping trip), Style elevation - 
                    Together we will take it step further and create new ways of accessorizing (handbags, jewelry, headwear) 
                    </p>
                    <CardFooter>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing" data-color="blue">
                  <CardBody>
                  <CardTitle tag="h5">Always a Fashionista</CardTitle>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-istanbul" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$2000</CardTitle>
                    <p className="card-description">
                      Services for the year including Special Events, Vacations & Seasonal styling.
                    </p>
                    <CardFooter>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 1 ********* */}
      </div>
    </>
  );
}

export default SectionPricing;
