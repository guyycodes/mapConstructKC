import React from 'react';
import { Box, Container, Heading, Text, Flex } from '@chakra-ui/react';
import { Navbar } from '../Navbar/Navbar';
import { ImageCarousel } from '../Carousel/Carousel';
import { PromoSection } from '../Promo/Promo';
import { WorkSection } from '../OurWork/OurWork';
import { Contact } from '../Contact/Contact';
import { Footer } from '../Footer/Footer';


// import {About} from './components/About';
// import {Services} from './components/Services';
// import {Testimonials} from './components/Testimonials';
// import {Statistics} from './components/Statistics';
// import {Contact} from './components/Contact';
// import {Footer} from './components/Footer';

export const Home = () => {
    return (
    
    <Flex flexDirection='column'>
      <Navbar />
      <ImageCarousel />
      <PromoSection/>
      <WorkSection />
      <Contact />
      <Footer />
    
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Testimonials /> */}
      {/* <Statistics /> */}
    </Flex>
    
    
    )
}