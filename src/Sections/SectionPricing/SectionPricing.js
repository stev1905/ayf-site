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
                  You have Free Unlimited Updates and Premium Support on each
                  package.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="3">
                <Card className="card-pricing" data-color="orange">
                  <CardBody>
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-basket" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$250</CardTitle>
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
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-settings" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$450</CardTitle>
                    <p className="card-description">
                    Closet Haul + 2 collaborative shopping trips. DIscard, Keep, Create, Collaborate (shopping trip), Style elevation - 
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
                    <div className="card-icon">
                      <span className="icon-simple">
                        <i className="nc-icon nc-istanbul" />
                      </span>
                    </div>
                    <CardTitle tag="h3">$3000</CardTitle>
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
