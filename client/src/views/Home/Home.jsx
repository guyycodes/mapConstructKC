import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Navbar } from '../../components/Navbar/Navbar';
import { ImageCarousel } from '../../components/Carousel/Carousel';
import { WorkSection } from '../../components/OurWork/OurWork';
import { Contact } from '../../components/Contact/Contact';
import { Footer } from '../../components/Footer/Footer';

export const Home = ( { Component, Component2, componentBehavior  } ) => {
    return (
    
    <Flex flexDirection='column'>
      <Navbar />
      <ImageCarousel />
      {Component}
      {Component2 ? Component2 : null}
      {componentBehavior ? null : <WorkSection />}
      <Contact />
      <Footer />
    </Flex>
    
    
    )
}