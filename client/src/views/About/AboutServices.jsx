import React from 'react';
import { Box, Container, Heading, SimpleGrid, Icon, Text } from '@chakra-ui/react';
import { FaHouse,  FaHotel, FaLaptopCode } from 'react-icons/fa6';
import { HiReceiptTax } from "react-icons/hi";
import {IoCogSharp,IoDiamondSharp, IoHeart} from 'react-icons/io5';
import { BsGraphUpArrow } from "react-icons/bs";


export const About = () => {
  return (
    <Box py={16}>
      <Container maxW="container.lg">
        <Heading as="h3" textAlign="center" mb={16}>
          OUR SERVICES
        </Heading>
        <SimpleGrid columns={[1, 2, 4]} spacing={8}>
          <Box textAlign="center">
            <Icon as={FaHouse} fontSize="6xl" mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Full Rehab
            </Heading>
            <Text>
              Revitalize your residential property with comprehensive construction rehab. We offer end-to-end support.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={IoHeart} fontSize="6xl" mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Kitchen Rehab
            </Heading>
            <Text>
              Enhance your kitchen's ambiance by updating materials and appliances. Whether it's cabinet refacing or
              custom installations, discover ways to rejuvenate your kitchen's design.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={IoDiamondSharp} fontSize="6xl" mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Bathroom Rehab
            </Heading>
            <Text>
              Unlock endless possibilities for redesigning your home's bathrooms, whether it's a sleek, low-maintenance
              shower or a full-scale bathroom transformation.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={IoCogSharp} fontSize="6xl" mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Room Addition
            </Heading>
            <Text>
              We specialize in custom room additions, expanding living space for Kansas City homes. Collaborating with
              your vision and budget, we create tailored living spaces that reflect your style.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaHotel} fontSize="6xl" mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Hotel Project Improvement Plans
            </Heading>
            <Text>
              Hotel owners must adhere to a PIP to align with the franchise's latest design standards. This is crucial
              as it enhances property value and long-term profitability.
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={HiReceiptTax} fontSize="6xl" mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Delinquent Sales Tax Audition
            </Heading>
            <Text>
              A sales tax audit verifies if a business has correctly collected and remitted the owed sales tax to the
              state. Let us assist you through this process!
            </Text>
          </Box>
          <Box textAlign="center">
            <Icon as={FaLaptopCode} fontSize="6xl" mb={4} />
            <Heading as="p" size="lg" mb={2}>
              Permits and Code Management
            </Heading>
            <Text>Navigating permits and codes can be daunting. Let us simplify the process for you.</Text>
          </Box>
          <Box textAlign="center">
            <Icon as={BsGraphUpArrow} fontSize="6xl" mb={4} />
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