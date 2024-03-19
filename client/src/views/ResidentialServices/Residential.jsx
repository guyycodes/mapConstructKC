import React, { useEffect } from 'react';
import { Box, Container, Heading, SimpleGrid, Icon, Text } from "@chakra-ui/react";
import { FaDesktop, FaHeart, FaCog } from "react-icons/fa";
import {IoCogSharp, IoDiamondSharp, IoHeart} from 'react-icons/io5';

export const ResidentialSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <Box id="services" py={16}>
      <Container maxW="container.lg">
        <Heading as="h3" textAlign="center" mb={16}>
          OUR RESIDENTIAL SERVICES
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box textAlign="center">
            <Icon as={FaDesktop} boxSize={12} mb={6} />
            <Heading as="p" size="lg" mb={2}>
              Full Rehab
            </Heading>
            <Text>
              Revitalize your residential property with comprehensive construction rehab. We offer end-to-end support.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaHeart} boxSize={12} mb={6} />
            <Heading as="p" size="lg" mb={2}>
              Kitchen Rehab
            </Heading>
            <Text>
              Enhance your kitchen's ambiance by updating materials and appliances. Whether it's cabinet refacing or
              custom installations, discover ways to rejuvenate your kitchen's design.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={IoDiamondSharp} boxSize={12} mb={6} />
            <Heading as="p" size="lg" mb={2}>
              Bathroom Rehab
            </Heading>
            <Text>
              Unlock endless possibilities for redesigning your home's bathrooms, whether it's a sleek, low-maintenance
              shower or a full-scale bathroom transformation.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaCog} boxSize={12} mb={6} />
            <Heading as="p" size="lg" mb={2}>
              Room Addition
            </Heading>
            <Text>
              We specialize in custom room additions, expanding living space for Kansas City homes. Collaborating with
              your vision and budget, we create tailored living spaces that reflect your style.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaDesktop} boxSize={12} mb={6} />
            <Heading as="p" size="lg" mb={2}>
              Permits and Code Management
            </Heading>
            <Text>Navigating permits and codes can be daunting. Let us simplify the process for you.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaHeart} boxSize={12} mb={6} />
            <Heading as="p" size="lg" mb={2}>
              Investment Property Analysis
            </Heading>
            <Text>
              Deciphering property evaluations and determining whether a property is worth exploring can be daunting,
              especially for newcomers to rental property investment. We simplify this complex analysis for you.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
