import React from 'react';
import { Box, Container, Heading, Text,  Image, Stack } from '@chakra-ui/react';
import { CustomButton } from '../../util/buttons/CustomButtons';

export const InvestmentPropertyAnalysis = () => {
  return (
    <Box bg="gray.100" py={16}>
      <Container maxW="container.lg">
        <Stack direction={['column', 'row']} spacing={8} align="center">
          <Box flex={1}>
            <Heading as="h3" size="lg" mb={4}>
              ABOUT INVESTMENT PROPERTY ANALYSIS
            </Heading>
            <Text mb={4}>
              At MAP Construct KC, our Investment Property Analysis service provides comprehensive insights and evaluations essential for informed decision-making in real estate investment. Our analysis encompasses a thorough assessment of various factors crucial to the profitability and viability of a potential investment property. This includes an in-depth examination of market trends, property condition, rental income potential, expenses, projected cash flow, and potential return on investment. We utilize advanced analytical tools and methodologies to provide accurate projections and recommendations tailored to our clients' investment goals and preferences. With our expertise and attention to detail, we empower investors to make sound investment decisions and maximize their returns in the dynamic Kansas City real estate market.
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
