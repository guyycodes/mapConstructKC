import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';
import { Navbar } from '../../components/Navbar/Navbar';
import { ImageCarousel } from '../../components/Carousel/Carousel';
import { CustomerReviews } from '../../components/Testimonials/Reviews'; 
import { WorkSection } from '../../components/OurWork/OurWork';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';

export const Home = ( { Component, Component2, Component3, componentBehavior  } ) => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, [Component]);
    return (
    /* Components requiring dynamic behavior are here */
    <Flex flexDirection='column'>
      <Navbar />
      <ImageCarousel />
      {Component}
      {Component2 ? Component2 : null}
      {componentBehavior === "RenderTestimonials" ? <CustomerReviews/> : null}
      {Component3 ? Component3 : null}
      {componentBehavior === "DontRenderWorkSection" ? null : <WorkSection />}
      <Contact />
      <Footer />
    </Flex>
    
    
    )
}