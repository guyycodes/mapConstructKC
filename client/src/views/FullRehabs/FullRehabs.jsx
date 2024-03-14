import React from 'react';
import { Box, Container, Heading, Text, Image, Stack } from '@chakra-ui/react';
import { CustomButton } from '../../util/buttons/CustomButtons';

export const FullRehabs = () => {
  return (
    <Box bg="gray.100" py={16} px={4}>
     <Container maxW="container.lg">
      <Stack direction={['column', 'row']} spacing={8} alignItems="center">
        <Box flex={1}>
          <Heading as="h3" size="lg" mb={4}>
            ABOUT FULL CONSTRUCTION REHABS
          </Heading>
          <Text mb={4}>
            As a leading contractor in Kansas City specializing in remodeling, we prioritize delivering the pinnacle of customer satisfaction. At MAP Construct KC, we are renowned for our commitment to crafting and revamping homes with unwavering focus on ensuring our customers' utmost contentment. We meticulously attend to every aspect of the project, meticulously guiding you through the cost estimation phase to ensuring your absolute delight with every facet of your renovated space. Employing top-tier materials and employing cutting-edge processes, we guarantee that your renovation exudes a quality that stands the test of time.
          </Text>
          <CustomButton children={'Learn More'} onClick={() => console.log('Button clicked')}/>
        </Box>
        <Box flex={1}>
          <Image
            src='assets/images/logo2.png'
            alt="Buildings"
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
