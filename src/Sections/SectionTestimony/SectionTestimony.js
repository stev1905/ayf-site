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

import './SectionTestimony.css'

// core components
/* const items = [
  {
    src: "https://s3.amazonaws.com/uifaces/faces/twitter/mlane/128.jpg",
    content: (
      <CardBody>
        <h5 className="card-description">
          "I'm newer to the front-end... With my creative side lacking in
          experience this really put me in the right spot to speed through the
          fast lane. I love this Design kit so much!"
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Chase Jackson</CardTitle>
          <h6 className="card-category">Web Developer</h6>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: "",
  },
  {
    src:
      "https://s3.amazonaws.com/creativetim_bucket/photos/134607/thumb.?1487680276",
    content: (
      <CardBody>
        <h5 className="card-description">
          "Love the shapes and color palette on this one! Perfect for one of my
          pet projects!"
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Robin Leysen</CardTitle>
          <h6 className="card-category">Web Developer</h6>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: "",
  },
  {
    src:
      "https://s3.amazonaws.com/creativetim_bucket/photos/125268/thumb.jpeg?1497799215",
    content: (
      <CardBody>
        <h5 className="card-description">
          "Love it. Use it for prototypes and along with Paper Dashboard."
        </h5>
        <CardFooter>
          <CardTitle tag="h4">Cristi Jora</CardTitle>
          <h6 className="card-category">Web Developer</h6>
          <div className="card-stars">
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star mr-1" />
            <i className="fa fa-star" />
          </div>
        </CardFooter>
      </CardBody>
    ),
    altText: "",
    caption: "",
  },
]; */

function SectionTestimonials() {
  // carousel - TESTIMONIALS 2
/*   const [activeIndex, setActiveIndex] = React.useState(0);
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
  }; */
  return (
    <>
      <div
        className="section section-testimonials cd-section"
        id="testimonials"
      >
        {/* ********* TESTIMONIALS 1 ********* */}
        <div
          className="testimonials-1 section-image"
          style={{
            backgroundImage:
              "url(`https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/uriel-soberanes.jpg?alt=media&token=d3b46061-14c2-40da-9716-8ed0a532d1a5`)",
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Clients testimonials</h2>
                <h5 className="description">
                Hear what people have to say about working with AYF.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                    "Crystal is a great stylist and knows her fashion. When she styled me I felt great and very confident. I know she knew what she was doing so I put myself in her hands and I was not disappointed.""
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Gretchen Vila</CardTitle>
                      <h6 className="card-category">@GretchenVila</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={`https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/ayo-ogunseinde-2.jpg?alt=media&token=e52c473f-b2ba-4939-a752-086c15ca6682`}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                      "Don't be scared of the truth because we need to restart
                      the human foundation in truth. That's why I love you like
                      Kanye loves Kanye I love Rick Owens??? bed design but the
                      back is not so attractive"
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Gina Andrew</CardTitle>
                      <h6 className="card-category">@ginaandrew</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={`https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/joe-gardner-2.jpg?alt=media&token=78dc0ea0-5134-4f22-bf27-e07a276832aa`}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-testimonial">
                  <div className="card-icon">
                    <i className="fa fa-quote-right" />
                  </div>
                  <CardBody>
                    <p className="card-description">
                    ???I am so happy I found Awaken Your Fashionista and Crystal!!! 
                    From the closet haul to the shopping trips, Crystal was there every step of the way! 
                    She explained different types of fabrics, patterns and picked out pieces that were aligned with what I want my new look to be. 
                    Crystal is patient and helped me discover my style. Because of Crystal not only do I look good but I FEEL good!! ??? 
                    </p>
                    <CardFooter>
                      <CardTitle tag="h4">Monica Guzman</CardTitle>
                      <h6 className="card-category">@MonicaGuzman</h6>
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="img"
                            src={`https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/kaci-baum-2.jpg?alt=media&token=2ebd87b1-a7c2-42ca-99bd-49e931120a1c`}
                          />
                        </a>
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END TESTIMONIALS 1 ********* */}
      </div>
    </>
  );
}

export default SectionTestimonials;
