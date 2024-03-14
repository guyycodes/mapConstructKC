import React from 'react';
import { Box, Heading, Text, Container, Image, Stack } from '@chakra-ui/react';
import { CustomButton } from '../../util/buttons/CustomButtons';

export const RoomAddition = () => {
  return (
    <Box bg="gray.100" py={16} px={4}>
     <Container maxW="container.lg">
      <Stack direction={['column', 'row']} spacing={8} alignItems="center">
        <Box flex={1}>
          <Heading as="h3" size="lg" mb={4}>
          ABOUT ROOM ADDITIONS
          </Heading>
          <Text mb={4}>
          At MAP Construct KC, we understand that when it comes to enhancing your home, 
          the desire for more space often tops the list of priorities. Whether you envision 
          a spacious two-car garage, a luxurious master suite, a convenient walkout in-law suite, 
          a dream kitchen, or even a captivating home theater room, we're here to turn your aspirations into reality.
          Investing in a home addition not only provides the extra space you crave but also boosts your property's value 
          and enhances your overall quality of life. Often, your home already possesses untapped potential that can be unlocked 
          through a thoughtfully planned addition project. Our team excels at evaluating your existing space and crafting additions 
          that seamlessly integrate with the existing structure of your home.
          </Text>
          <CustomButton children={'Learn More'} onClick={() => console.log('Button clicked')}/>
        </Box>
        <Box flex={1}>
          <Image
            src="assets/images/logo2.png"
            alt="Kitchens"
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