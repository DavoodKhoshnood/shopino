import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from './CarouselShow';

const Advertisement = () => {
  return (
    <>
      <Row className="d-none d-lg-block mb-3">
        <Col sm={0} mb={0} lg={12} className="mt-3">
          <Carousel />
        </Col>
      </Row>
      <Row className="mt-4">
        
        <Col sm={12} mb={6} lg={6} className="mb-3">
          <img
            className="w-100 rounded"
            src="/images/desktop-content-spot-840x740-8b240a4a6ff9a401a887e6fce4ecb7db.webp"
            alt="Ad-2"
          />
        </Col>
        <Col sm={12} mb={6} lg={6} className="mb-3">
          <img
            className="w-100 rounded"
            src="/images/desktop-content-spot-840x740-26-e8b0d7913cacc526f1f8b23704670838.webp"
            alt="Ad-3"
          />
        </Col>
      </Row>
    </>
  );
};

export default Advertisement;
