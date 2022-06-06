import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "reactstrap";
import Image1 from "../../Assests/Images/image_1.jpeg";
import Image2 from "../../Assests/Images/image_2.jpeg";
import Image3 from "../../Assests/Images/image_3.jpeg";
import "./Banner.css";
const Banner = () => {
  return (
    <section className=" p-5">
      <Container>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img
              className="carousel__img d-block "
              src={Image1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="carousel__img d-block " src={Image2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="carousel__img d-block " src={Image3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Banner;
