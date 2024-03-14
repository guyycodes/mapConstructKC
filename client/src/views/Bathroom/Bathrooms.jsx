import React from 'react';
import { Box, Container, Heading, Text,  Image, Stack } from '@chakra-ui/react';
import { CustomButton } from '../../util/buttons/CustomButtons';

export const Bathroom = () => {
  return (
    <Box bg="gray.100" py={16}>
      <Container maxW="container.lg">
        <Stack direction={['column', 'row']} spacing={8} align="center">
          <Box flex={1}>
            <Heading as="h3" size="lg" mb={4}>
                ABOUT BATHROOM REHABS
            </Heading>
            <Text mb={4}>
            At MAP Construct KC, we specialize in delivering top-notch bathroom remodeling services tailored to your preferences and requirements. Whether you're seeking a complete overhaul or simply aiming to upgrade your tub or shower, our experienced team ensures the job is done right the first time. As the space where you begin and end your day, your bathroom deserves to reflect your unique style and functionality needs. Undertaking a bathroom remodel, particularly one so intimately connected to your bedrooms, can be daunting to tackle alone. However, by entrusting your project to our skilled professionals, you can rest assured of timely, reliable, and trustworthy service. Reach out to us today to embark on your next dependable bathroom remodeling journey.
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
