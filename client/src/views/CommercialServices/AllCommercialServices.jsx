import React, { useEffect } from 'react';
import { Box, Container, Heading, Text, Stack, Icon } from '@chakra-ui/react';
import { FaCog, FaDesktop, FaHeart } from 'react-icons/fa';

export const AllCommercial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <Box bg="gray.100" py={16} id="services">
      <Container maxW="container.lg">
        <Heading as="h3" size="lg" textAlign="center" mb={8}>
          OUR COMMERCIAL SERVICES
        </Heading>
        <Stack direction={['column', 'row']} spacing={8} mt={16}>
          <Box flex={1} textAlign="center">
            <Icon as={FaCog} boxSize={12} mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Hotel Project Improvement Plans
            </Heading>
            <Text>
              Hotel owners must adhere to a PIP to align with the franchise's latest design standards. This is crucial as it enhances property value and long-term profitability.
            </Text>
          </Box>
          <Box flex={1} textAlign="center">
            <Icon as={FaCog} boxSize={12} mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Delinquent Sales Tax Audition
            </Heading>
            <Text>
              A sales tax audit verifies if a business has correctly collected and remitted the owed sales tax to the state. Let us assist you through this process!
            </Text>
          </Box>
          <Box flex={1} textAlign="center">
            <Icon as={FaDesktop} boxSize={12} mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Permits and Code Management
            </Heading>
            <Text>
              Navigating permits and codes can be daunting. Let us simplify the process for you.
            </Text>
          </Box>
          <Box flex={1} textAlign="center">
            <Icon as={FaHeart} boxSize={12} mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Investment Property Analysis
            </Heading>
            <Text>
              Deciphering property evaluations and determining whether a property is worth exploring can be daunting, especially for newcomers to rental property investment. We simplify this complex analysis for you.
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};