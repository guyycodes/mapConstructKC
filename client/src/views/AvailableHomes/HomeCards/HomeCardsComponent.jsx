import React from 'react';
import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';
import house from '../../../../public/assets/images/samplehouse.png'

export const AvailableHomes = () => {
  const homes = [
    {
      address: 'Address Here',
      details: 'Additional Property Details Price, extra.',
      image: '../../../../public/assets/images/samplehouse.png',
      alt: 'Full Rehab',
    },
    {
      address: 'Address Here',
      details: 'Additional Property Details Price, extra.',
      image: '../../../../public/assets/images/samplehouse.png',
      alt: 'Kitchen Rehab',
    },
    {
      address: 'Address Here',
      details: 'Additional Property Details Price, extra.',
      image: '../../../../public/assets/images/samplehouse.png',
      alt: 'Bathroom Rehab',
    },
    {
      address: 'Address Here',
      details: 'Additional Property Details Price, extra.',
      image: '../../../../public/assets/images/samplehouse.png',
      alt: 'Room Addition',
    },
    {
      address: 'Address Here',
      details: 'Additional Property Details Price, extra.',
      image: '../../../../public/assets/images/samplehouse.png',
      alt: 'Hotel Project Improvement Plans',
    },
    {
      address: 'Address Here',
      details: 'Additional Property Details Price, extra.',
      image: '../../../../public/assets/images/samplehouse.png',
      alt: 'Delinquent Sales Tax Audition',
    },
    {
      address: 'Address Here',
      details: 'Additional Property Details Price, extra.',
      image: '../../../../public/assets/images/samplehouse.png',
      alt: 'Permits and Code Management',
    },
    {
      address: 'Address Here',
      details: 'Additional Property Details Price, extra',
      image: '../../../../public/assets/images/samplehouse.png',
      alt: 'Investment Property Analysis',
    },
  ];

  return (
    <Box id="available-homes" py={16}>
      <Container maxW="container.lg">
        <Heading as="h3" textAlign="center" mb={10}>
          AVAILABLE HOMES
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={10}>
          {homes.map((home, index) => (
            <Box key={index} textAlign="center">
              <Image
                src={home.image}
                alt={home.alt}
                mb={4}
                mx="auto"
                boxSize="50%"
              />
              <Text fontSize="xl" fontWeight="bold">
                {home.address}
              </Text>
              <Text>{home.details}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};
