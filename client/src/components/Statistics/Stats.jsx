import React from 'react';
import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';

export const WorkStatistics = () => {
  return (
    <Box bg="gray.700" py={16}>
      <Container maxW="container.lg">
        <Stack direction={['column', 'row']} spacing={8} align="center" justify="center">
          <Box textAlign="center">
            <Heading as="span" size="2xl" color="white">
              14+
            </Heading>
            <Text color="white" fontSize="lg">
              Partners
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading as="span" size="2xl" color="white">
              55+
            </Heading>
            <Text color="white" fontSize="lg">
              Projects Done
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading as="span" size="2xl" color="white">
              89+
            </Heading>
            <Text color="white" fontSize="lg">
              Happy Clients
            </Text>
          </Box>
          <Box textAlign="center">
            <Heading as="span" size="2xl" color="white">
              150+
            </Heading>
            <Text color="white" fontSize="lg">
              Meetings
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};