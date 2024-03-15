import React from 'react';
import { Box, Container, Heading, SimpleGrid, Card, CardBody, Image, Text, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

export const CustomerReviews = () => {
  const testimonials = [
    {
      name: 'Angela H.',
      stars: 5,
      source: 'Google Review',
      text: "Tim and his crew did an excellent job on our project! They were timely, professional and friendly. They went way above and beyond to ensure we were happy and did a great job of letting us know the plan for the day and of cleaning up. The work turned out great. Tim couldn't be nicer! We were very happy!",
    },
    {
      name: 'Tiffany C.',
      stars: 5,
      source: 'Google Review',
      text: 'MAP did a quick job for my small business and everything turned out great! We had a counter top repair and some concrete work done. Communication was seamless and everything was cleaned up before they wrapped up the job.',
    },
    {
      name: 'Jenna N.',
      stars: 5,
      source: 'Google Review',
      text: 'This company was so easy to work with and has great prices. I was needing my fireplace re-tiled and he got it done in no time. Definitely will use this company again.',
    },
    {
      name: 'JT V.',
      stars: 5,
      source: 'Google Review',
      text: 'Excellent job, appreciate how clean and efficient you guys are.',
    },
  ];

  const renderStars = (stars) => {
    return Array(stars)
      .fill()
      .map((_, index) => (
        <Icon as={FaStar} key={index} color="yellow.500" />
      ));
  };

  return (
    <Box py={16} id="team">
      <Container maxW="container.lg">
        <Heading as="h3" textAlign="center" mb={16}>
          TESTIMONIES
        </Heading>
        <SimpleGrid columns={[1,2, 4]} spacing={8}>
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardBody>
                <Box display="flex" justifyContent="center" mb={4}>
                  {renderStars(testimonial.stars)}
                </Box>
                <Heading as="h3" size="md" mt={4}>
                  {testimonial.name}
                </Heading>
                <Text fontSize="sm" color="gray.500" mt={1}>
                  {testimonial.source}
                </Text>
                <Text mt={4}>{testimonial.text}</Text>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};