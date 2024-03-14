import React from 'react';
import { Box, Heading, Text, Container, Image, Stack } from '@chakra-ui/react';
import { CustomButton } from '../../util/buttons/CustomButtons';

export const Kitchens = () => {
  return (
    <Box bg="gray.100" py={16} px={4}>
     <Container maxW="container.lg">
      <Stack direction={['column', 'row']} spacing={8} alignItems="center">
        <Box flex={1}>
          <Heading as="h3" size="lg" mb={4}>
            ABOUT KITCHEN REHABS
          </Heading>
          <Text mb={4}>
            At MAP Construct KC, we recognize the kitchen as the focal point of any home, where
            culinary delights are prepared and cherished moments are shared. Should your kitchen
            fall short of your expectations for cooking and entertaining, our dedicated team aims to
            transform it into a vibrant hub that fosters connection and creates lasting memories
            with loved ones. Whether you seek to upgrade countertops, replace cabinets, or embark on
            a full-scale kitchen renovation, rely on our skilled professionals to deliver
            exceptional results, ensuring your vision is brought to life with precision and
            expertise.
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