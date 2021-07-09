import React from 'react';
import {
    Button,
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    Nav,
    Container,
  } from "reactstrap";
import './SectionHeader2.css';

const SectionHeader2 = () => {
    return (
        <div className="section2-container">
            <div className="nav-section">
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
            </div>
            <div className="title"><span>Awaken Your Fashionista</span></div>
            <div className="top-section">
                <div className="img-left-container">
                    <div className="img-box"><img alt="fashion1" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen%20Shot%202021-07-07%20at%2011.23.22%20PM.png?alt=media&token=74cb837a-4ffd-42a0-bf53-f6d65b388170"></img></div>
                    <div className="img-box"><img alt="fashion2" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen%20Shot%202021-07-07%20at%2011.24.39%20PM.png?alt=media&token=cdee1c3c-ab0a-48f8-8fbf-333f7a5af20e"></img></div>
                    <div className="img-box"><img alt="fashion3" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen%20Shot%202021-07-07%20at%2011.28.04%20PM.png?alt=media&token=a564a6c7-dc28-4452-ae60-a7bf21e73266"></img></div>
                    <div className="img-box"><img alt="fashion4" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen%20Shot%202021-07-07%20at%2011.27.17%20PM.png?alt=media&token=16b690e5-7850-42dc-add6-e9a042741417"></img></div>
                </div>
                <div className="img-middle-container">
                    <div className="lrg-img-box"><img alt="bigFashion" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen_Shot_2021-07-07_at_11.30.33_PM__1_-removebg-preview.png?alt=media&token=efcaee6f-753e-450a-b2f8-447f405b631f"></img></div>
                </div>
                <div className="img-right-container">
                    <div className="img-box"><img alt="fashion5" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen%20Shot%202021-07-07%20at%2011.27.44%20PM.png?alt=media&token=7b50c0fd-1575-4626-aefd-83efb8feef9e"></img></div>
                    <div className="img-box"><img alt="fashion6" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen%20Shot%202021-07-07%20at%2011.32.43%20PM.png?alt=media&token=ee13885a-2197-4f23-9637-bbf3fe965a7f"></img></div>
                    <div className="img-box"><img alt="fashion7" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen%20Shot%202021-07-07%20at%2011.24.03%20PM.png?alt=media&token=04d4587f-7bf6-4d74-82ec-4e2c349eab68"></img></div>
                    <div className="img-box"><img alt="fashion8" src="https://firebasestorage.googleapis.com/v0/b/chris-api-project.appspot.com/o/CrystalAYF%2FScreen%20Shot%202021-07-07%20at%2011.25.41%20PM.png?alt=media&token=dd2983dc-4142-43d8-a464-a5ca63ad7076"></img></div>
                </div>
            </div>
            <div className="bottom-section">
                <div><h1>Test</h1></div>
            </div>
        </div>
    )
}

export default SectionHeader2;