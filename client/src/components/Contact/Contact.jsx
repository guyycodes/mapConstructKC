import React from 'react';
import { Box, Heading, Text, Stack, Icon, Link, Input, Textarea, Button } from '@chakra-ui/react';
import { FaMapMarker, FaPhone, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export const Contact = () => {
  return (
    <Box bg="gray.100" py={16} id="contact">
      <Heading as="h3" textAlign="center" mb={4}>
        CONTACT
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={12}>
        Let's get in touch. Send us a message:
      </Text>
      <Stack spacing={8} alignItems="center">
        <Stack direction="row" alignItems="center" spacing={4}>
          <Icon as={FaMapMarker} boxSize={8} mr={4} />
          <Text>Kansas City, Missouri</Text>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={4}>
          <Icon as={FaPhone} boxSize={8} mr={4} />
          <Text>Phone: (512) 994-9027</Text>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={4}>
          <Icon as={FaEnvelope} boxSize={8} mr={4} />
          <Text>
            Email: <Link href="mailto:t.paul@mapconstructkc.com">t.paul@mapconstructkc.com</Link>
          </Text>
        </Stack>
      </Stack>
      <Box maxWidth="40%" mx="auto" mt={8}>
        <form action="mailto:t.paul@mapconstructkc.com" method="post" encType="text/plain">
          <Stack spacing={4}>
            <Input type="text" placeholder="Name" name="Name" required />
            <Input type="email" placeholder="Email" name="Email" required />
            <Input type="text" placeholder="Subject" name="Subject" required />
            <Textarea placeholder="Message" name="Message" required height="200px" />
            <Button leftIcon={<FaPaperPlane />} colorScheme="black" type="submit" color={'gray'}>
              SEND MESSAGE
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
};
