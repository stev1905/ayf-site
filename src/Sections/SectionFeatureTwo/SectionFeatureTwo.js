import React from "react";

// reactstrap components
import {
  //Button,
  //Card,
  //CardBody,
  //CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";

import './SectionFeatureTwo.css'
// core components

function SectionHeader() {
  return (
    <>
      <div className="section section-feature cd-section" id="features">
              {/* ********* FEATURES 5 ********* */}
              <div
          className="features-5 section-image"
          style={{
            backgroundImage:
              "url(https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/rawpixel-com-2.jpg?alt=media&token=346d079b-c697-48f8-9921-f85b384b4dd7)"
          }}
        >
          <Container>
            <Row>
              <div className="ml-auto mr-auto">
                <h2 className="title text-center">
                  Your life will be much easier
                </h2>
              </div>
            </Row>
            <Row>
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-atom" />
                  </div>
                  <h4 className="title">For Developers</h4>
                  <p>
                    While everyone technically has the feature now, that doesn’t
                    mean you’ll see it all the time. But in this case, the
                    feature wasn’t just randomly A/B tested.
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <h4 className="title">For Designers</h4>
                  <p>
                    Loveflutter has actually been around for a while, pivoting
                    from matches based on shared interests (innovative!) to now
                    focus on analyzing.
                  </p>
                </div>
              </Col>
            </Row>
            <Row className="bottom-line">
              <Col className="ml-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-paper" />
                  </div>
                  <h4 className="title">Example Pages Included</h4>
                  <p>
                    As for the user backlash, it comes to the challenges faces
                    in building features to aid newcomers, which can impact its
                    growth and bottom line.
                  </p>
                </div>
              </Col>
              <Col className="mr-auto" sm="5">
                <div className="info">
                  <div className="icon">
                    <i aria-hidden={true} className="nc-icon nc-time-alarm" />
                  </div>
                  <h4 className="title">Save Time</h4>
                  <p>
                    The feature itself had been developed via experimental
                    account, where it had tested how to better personalize its
                    service to end users.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 5 ********* */}
      </div>
    </>
  );
}

export default SectionHeader;
