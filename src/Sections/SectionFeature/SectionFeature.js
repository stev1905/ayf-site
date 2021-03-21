import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Row,
  Col,
} from "reactstrap";

import './SectionFeature.css'
// core components

function SectionHeader() {
  return (
    <>
      <div className="section section-feature cd-section" id="features">
        {/* ********* FEATURES 4 ********* */}
        <div className="features-4">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Together We Will</h2>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <div className="ipad-container">
                  <img
                    alt="..."
                    src={"https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/ipad.png?alt=media&token=a7f9f5cb-0050-4f0e-a7db-43a03b0bc049"}
                  />
                </div>
              </Col>
              <Col className="offset-1" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i aria-hidden={true} className="nc-icon nc-atom" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Discard</h4>
                    <p>
                        Get rid of or donate any pieces that we know need to go.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-success">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Keep</h4>
                    <p>
                        We will go through your closet and intentionally discuss what to keep. 
                        In the process, we will discuss what is flattering for your body type 
                        including silhouettes, colors, and fabrics.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i aria-hidden={true} className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Create</h4>
                    <p>
                        Together we will create new staple outfits based on pieces you already own!
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i aria-hidden={true} className="nc-icon nc-palette" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Style</h4>
                    <p>
                        After a closet haul, the client will receive a one-pager on new clothing pieces to help complete their wardrobe.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-danger">
                    <i aria-hidden={true} className="nc-icon nc-cart-simple" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Shop</h4>
                    <p>
                        Depending on your package selected, we will go on shopping trips and officially activate your inner fashionista!
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END FEATURES 4 ********* */}
      </div>
    </>
  );
}

export default SectionHeader;
