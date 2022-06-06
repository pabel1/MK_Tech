import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import PSContent from "./PS-Content";
import "./ProductServices.css";


const ProductServices = () => {
  const [psContent, setpsContent] = useState(" ");
  return (
    <section className="Product__section">
      <Container>
        <Row>
          <Col lg="12" md="12">
            <h1>Products & Services</h1>
            <div className="content">
              <button onClick={() => setpsContent("PSContent")}>
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Issue Management
              </button>
            </div>
            {psContent === "PSContent" && <PSContent />}
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default ProductServices;
