import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";

import './SectionHeader.css'
// core components
const items = [
  {
    backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/8.png?alt=media&token=512854da-9b4f-47a5-8932-877dfb93d728")`, 
    content: (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">Awesome Experiences</h1>
            <h5>
              Now you have no excuses, it's time to surprise your clients, your
              competitors, and why not, the world. You probably won't have a
              better chance to show off all your potential if it's not by
              designing a website for your own agency or web studio.
            </h5>
            <br />
            <h6>Connect with us:</h6>
            <div className="buttons">
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-instagram" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  }
];

function SectionHeader() {
  // carousel - header 3
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  // video - header 4
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  const videoRef = React.createRef();
  const videoButtonClick = () => {
    if (videoPlaying) {
      setVideoPlaying(false);
      videoRef.current.pause();
    } else {
      setVideoPlaying(true);
      videoRef.current.play();
    }
  };
  return (
    <>
      <div className="section section-header cd-section" id="headers">
        {/* ********* HEADER 2 ********* */}
        <div className="header-2">
          <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand className="mb-0" href="www.creative-tim.com">
              <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-instagram" />
                  </Button>
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
            </Container>
          </Navbar>
          <div
            className="page-header"
            style={{
              backgroundColor: `#abc3c3` 
            }}
          >
            <div className="filter" />
            <div className="content-center">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <img src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/newTransparent.png?alt=media&token=3fe0cab3-357f-4eb3-9538-7b2a12af112e" />
                    <h5 className="description">
                    encourages women to prioritize 
                    themselves through style, self-love, and by showcasing 
                    individuality. Through an intentional process you will 
                    learn different ways to show up for your best self. 
                    Prioritizing yourself allows success in every area of your life. 
                    AYF helps women achieve a new appreciation of self, style and life! 
                    </h5>
                    <br />
                  </Col>
                  <Col className="ml-auto mr-auto" md="7">
                    <Card className="card-raised card-form-horizontal no-transition">
                      <CardBody>
                        <Form action="" method="">
                          <Row>
                            <Col md="7">
                              <FormGroup>
                                <Input
                                  defaultValue=""
                                  placeholder="Schedule Your Free Consultation"
                                  type="date"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="5">
                              <Button block color="danger" type="button">
                                <i className="nc-icon nc-zoom-split" /> Book Consultation
                              </Button>
                            </Col>
                          </Row>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* ********* END HEADER 2 ********* */}
      </div>
    </>
  );
}

export default SectionHeader;
