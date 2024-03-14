import React from 'react';
import { Box, Container, Heading, Text,  Image, Stack } from '@chakra-ui/react';
import { CustomButton } from '../../../util/buttons/CustomButtons';

export const HotelProjectComponent= () => {
  return (
    <Box bg="gray.100" py={16}>
      <Container maxW="container.lg">
        <Stack direction={['column', 'row']} spacing={8} align="flex-start">
          <Box flex={1}>
            <Heading as="h3" size="lg" mb={4}>
            ABOUT HOTEL PROJECT IMPROVEMENT PLANS
            </Heading>
            <Text mb={4} as="div">
              At MAP Construct KC, our Hotel Project Improvement Plans are meticulously designed to elevate the functionality, aesthetics, and overall guest experience of your hotel establishment. With our comprehensive approach, we collaborate closely with hotel owners and management to identify areas for enhancement and devise tailored improvement strategies.
              <br /><br />
              Our plans encompass a wide range of aspects crucial to the success of your hotel, including but not limited to:
              <br /><br />
              <strong>1. Interior Renovations:</strong> From revitalizing lobby spaces to upgrading guest rooms, we specialize in transforming interiors to create inviting, modern, and comfortable environments that leave a lasting impression on your guests.
              <br /><br />
              <strong>2. Exterior Upgrades:</strong> Enhancing curb appeal is essential for attracting guests. We focus on exterior improvements such as landscaping, façade renovations, and outdoor amenities to enhance the visual appeal and overall ambiance of your property.
              <br /><br />
              <strong>3. Infrastructure Enhancements:</strong> Ensuring the smooth operation of your hotel requires efficient infrastructure. We assess and upgrade mechanical, electrical, and plumbing systems to optimize functionality and energy efficiency.
              <br /><br />
              <strong>4. Technology Integration:</strong> In today's digital age, incorporating cutting-edge technology is vital for guest satisfaction. We implement state-of-the-art solutions such as smart room features, high-speed internet connectivity, and automated systems to enhance convenience and modernize your hotel.
              <br /><br />
              <strong>5. Accessibility Improvements:</strong> Making your hotel accessible to all guests is not only a legal requirement but also a demonstration of inclusivity. We evaluate and implement modifications to ensure compliance with accessibility standards, providing a welcoming environment for every visitor.
              <br /><br />
              <strong>6. Safety and Security Enhancements:</strong> Protecting the well-being of your guests and staff is paramount. We install and upgrade security systems, fire safety measures, and emergency response protocols to maintain a secure environment and instill peace of mind.
              <br /><br />
              By entrusting your Hotel Project Improvement Plans to MAP Construct KC, you can rest assured that your property will undergo a comprehensive transformation tailored to meet your specific goals, budget, and timeline. Our commitment to excellence and attention to detail ensure that every aspect of your hotel is optimized to exceed guest expectations and drive long-term success in the competitive hospitality industry. Contact us today to discuss how we can elevate your hotel to new heights of excellence.
            </Text>
            <CustomButton children={'Learn More'} onClick={() => console.log('Button clicked')}/>
          </Box>
          <Box flex={1}>
            <Image
              src="assets/images/logo2.png"
              alt="Investment Analysis"
              width={350}
              height={350}
              borderRadius="lg"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
