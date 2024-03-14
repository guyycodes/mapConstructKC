import React from 'react';
import { Box, Container, Heading, Text, Button, Image, Stack } from '@chakra-ui/react';
import logo from '/assets/images/logo2.png';

export const PromoSection = () => {
  return (
    <Box bg="gray.100" py={16}>
      <Container maxW="auto" justifyContent='center'>
        <Stack direction={['column', 'row']} spacing={8} align="center" >
          <Box flex={1}>
            <Heading as="h3" size="lg" mb={4}>
              ABOUT US
            </Heading>
            <Text mb={4}>
              At MAP Construct KC, honesty, transparency, quality work, and community support are our guiding
              principles.
              <br />
              With over 25 years of combined construction experience, we deliver exceptional service at competitive
              rates. We ensure our clients are delighted with their finished projects, whether it's a home or commercial
              building.
              <br />
              If you can dream it, we can build it. Building a Better Kansas City with MAP Construct, LLC.
            </Text>
            <Button
                colorScheme="black"
                leftIcon={<i className="fa fa-th" />}
                size="lg"
                borderRadius="full"
                px={8}
                py={6}
                background="black"
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wide"
                boxShadow="md"
                transition="all 0.2s"
                _hover={{
                    transform: 'scale(1.05)',
                    boxShadow: 'lg',
                }}
                >
                Learn More
            </Button>
          </Box>
          <Box flex={1}>
            <Image
              src={logo}
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
