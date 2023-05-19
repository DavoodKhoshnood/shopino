import React, { useState } from 'react';
import Slide from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

const CarouselShow = () => {
    
      const [index, setIndex] = useState(0);
    
      const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
      };
    
      return (
        <Slide activeIndex={index} onSelect={handleSelect}>
          <Slide.Item>
            <img
              className="d-block w-100 rounded"
              src="/images/desktop-middle-banner-1704x740-2-518bba61a1c7e5ee6a4a9dddf.jpg"
              alt="Second slide"
            />
    
            <Slide.Caption>
              <h3>Step into elegance</h3>
              <p> with our stunning new dress collection, designed to make you feel confident, chic, and absolutely fabulous.</p>
            </Slide.Caption>
          </Slide.Item>
          <Slide.Item>
            <img
              className="d-block w-100 rounded"
              src="/images/desktop-middle-ban-1704x740-2-518bba61a1c7e5ee6a4a9dryuc46dtb3.webp"
              alt="First slide"
              />
            <Slide.Caption className='button-caption'>
              <Button >Shop Now</Button>
            </Slide.Caption>
          </Slide.Item>
          <Slide.Item>
            <img
              className="d-block w-100 rounded"
              src="/images/desktop-middle-banner-1704x740-min-304a969e7d834aaae6e1ab5e6ca5c893.webp"
              alt="Third slide"
              />
    
            <Slide.Caption>
              <h3>Unleash your athletic prowess</h3>
              <p>
                with our high-performance sport shirt, engineered for comfort, style, and peak performance on and off the field.              
              </p>
            </Slide.Caption>
          </Slide.Item>
        </Slide>
      );
    
}

export default CarouselShow;