import './Footer.css';

import Carousel from 'react-img-carousel';
require('react-img-carousel/lib/carousel.css');

export default function Footer() {
  return (
    <div className='subsection' id='slideshowContainer'>
      <Carousel autoplay='true' autoplaySpeed='3500' viewport='300px' slideHeight='300px' cellPadding={ 5 }>
        <img
          className='carouselPic'
          alt='Claire and a friend a sunset'
          src='https://i.imgur.com/ZX3lqCL.jpg'
        />
        <img
          className='carouselPic'
          alt='Claire with Purdue Medical Innovation, Networking, and Design (Spring 2021)'
          src='https://i.imgur.com/vYk2PGb.jpg'
        />
        <img
          className='carouselPic'
          alt='Claire on a hike with friends'
          src='https://i.imgur.com/CdIvVU4.jpg'
        />
        <img
          className='carouselPic'
          alt="Claire volunteering at the Fall 2021 Spark Challenge"
          src='https://i.imgur.com/4DC6kbf.jpg'
        />
        <img
          className='carouselPic'
          alt='Claire and her sister half way through a 5 mile hike'
          src='https://i.imgur.com/cWOAv36.jpg'
        />
        <img
          className='carouselPic'
          alt='An exhibit from the Chicago 2021 Botanic Gardens light show'
          src='https://i.imgur.com/YyyxVKY.jpg'
        />
        <img
          className='carouselPic'
          alt='Claire volunteering with friends to rake leaves'
          src='https://i.imgur.com/tWqCaZq.jpg'
        />
        <img
          className='carouselPic'
          alt='Claire at her remote Google internship'
          src='https://i.imgur.com/fUlNzbu.jpg'
        />
        <img
          className='carouselPic'
          alt='Claire with her family at a Purdue football game'
          src='https://i.imgur.com/x4NbuL8.jpg'
        />
      </Carousel>

      <h5 id='footer'>Copyright © {new Date().getFullYear()} Claire Poukey. All Rights Reserved</h5>
    </div>
  );
}
