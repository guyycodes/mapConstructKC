import React from 'react';
import { Box, Heading, Text, Icon, Link, Input, Textarea, Button} from '@chakra-ui/react';
import { FaMapMarker, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export const Contact = () => {
  return (
    <Box bg="gray.100" pt={16} px={4} id="contact">
      <Box>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.9947843124205!2d-94.5988108!3d38.9926154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0ef266dcb2373%3A0x23dd85c5f48076be!2s800%20W%2075th%20St%2C%20Kansas%20City%2C%20MO%2064114!5e0!3m2!1sen!2sus!4v1709155230325!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};
