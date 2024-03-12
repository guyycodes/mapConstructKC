import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import {Navbar} from '../Navbar/Navbar';
// import {Carousel} from './components/Carousel';
// import {Services} from './components/Services';
// import {About} from './components/About';
// import {Testimonials} from './components/Testimonials';
// import {Statistics} from './components/Statistics';
// import {OurWork} from './components/OurWork';
// import {Contact} from './components/Contact';
// import {Footer} from './components/Footer';

export const Home = () => {
    return (
        <>
    <Box>
      <Navbar />
      {/* <Carousel /> */}
      <Container maxW="container.lg" width={'100vw'} mt={8}>
        <Box textAlign="center">
          <Heading as="h1" size="xl" mt={4}>
            We apologize for any inconvenience, but our website is currently undergoing scheduled maintenance to ensure optimal performance and user experience. Please check back shortly. Thank you for your patience!
          </Heading>
        </Box>
      </Container>
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Testimonials /> */}
      {/* <Statistics /> */}
      {/* <OurWork /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </Box>
        </>
    
    )
}