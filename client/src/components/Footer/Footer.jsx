import React from 'react';
import { Box, Flex, Heading, Text, Link, UnorderedList, ListItem, Icon } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaSnapchat, FaPinterestP, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';

export const Footer = () => {
      // Function to smoothly scroll to the top
  const scrollToTop = (e) => {
    e.preventDefault(); // Prevent the default anchor tag behavior
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: 'smooth', // Enable smooth scrolling
    });
  };

  return (
    <Box as="footer" bg="black" color="white" py={16} textAlign="center">
      <Flex flexWrap="wrap" justifyContent="center">
        <Box width={['100%', '50%', '25%']} mb={8}>
          <Heading as="h4" size="md" mb={2}>Map Construct KC</Heading>
          <Text>
            <Link href="https://www.google.com/maps/place/800+W+75th+St,+Kansas+City,+MO+64114" target="_blank" isExternal>
              800 W 75th St, Kansas City, MO 64114
            </Link>
          </Text>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.9947855522455!2d-94.60138572405863!3d38.992615371703856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0efecd9c0a4c9%3A0x7c024479f12b6582!2sMAP%20Construct!5e0!3m2!1sen!2sus!4v1708709649421!5m2!1sen!2sus"
            width="200"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
        <Box width={['100%', '50%', '25%']} mb={8}>
          <Heading as="h4" size="md" mb={2}>Contact Us</Heading>
          <Text>info@mapconstructkc.com</Text>
          <Text>(512) 994-9027</Text>
        </Box>
        <Box width={['100%', '50%', '25%']} mb={8}>
          <UnorderedList styleType="none">
            <ListItem><Link href="index.html">HOME</Link></ListItem>
            <ListItem><Link href="Residential/home.html">RESIDENTIAL SERVICES</Link></ListItem>
            <ListItem><Link href="About/home.html">ABOUT US</Link></ListItem>
            <ListItem><Link href="Commercial/home.html">COMMERCIAL SERVICES</Link></ListItem>
          </UnorderedList>
        </Box>
        <Box width={['100%', '50%', '25%']} mb={8}>
          <UnorderedList styleType="none">
            <ListItem><Link href="Gallery/home.html">GALLERY</Link></ListItem>
            <ListItem><Link href="Blog/home.html">BLOG</Link></ListItem>
            <ListItem><Link href="Available Homes/home.html">AVAILABLE HOMES</Link></ListItem>
            <ListItem><Link href="https://buy.stripe.com/00g7uh0FNeHZ47KcMM">PAYMENT PORTAL</Link></ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <Link href="#home" bg="gray.300" color="black" py={2} px={4} borderRadius="md" mb={8} display="inline-flex" alignItems="center" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }}>
        <Icon as={FaArrowUp} mr={2} />
        To the top
      </Link>
      <Flex justifyContent="center" mt={4}>
        <Link href="https://www.facebook.com" isExternal mx={2}><Icon as={FaFacebook} w={6} h={6} /></Link>
        <Link href="https://www.instagram.com" isExternal mx={2}><Icon as={FaInstagram} w={6} h={6} /></Link>
        <Link href="https://www.snapchat.com" isExternal mx={2}><Icon as={FaSnapchat} w={6} h={6} /></Link>
        <Link href="https://www.pinterest.com" isExternal mx={2}><Icon as={FaPinterestP} w={6} h={6} /></Link>
        <Link href="https://www.twitter.com" isExternal mx={2}><Icon as={FaTwitter} w={6} h={6} /></Link>
        <Link href="https://www.linkedin.com" isExternal mx={2}><Icon as={FaLinkedin} w={6} h={6} /></Link>
      </Flex>
      <Text mt={4}>© MAP Construct KC, LLC</Text>
    </Box>
  );
};

