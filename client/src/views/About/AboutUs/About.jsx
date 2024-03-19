import React, { useEffect } from 'react';
import { Box, Heading, Text, Container, Image, Stack } from '@chakra-ui/react';
import { CustomButton } from '../../../util/buttons/CustomButtons';

export const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <Box bg="gray.100" py={16} px={4}>
      <Container maxW="container.lg">
        <Stack direction={['column', 'row']} spacing={8} alignItems="center">
          <Box flex={2}>
            <Heading as="h3" size="lg" mb={4}>
              ABOUT MAP CONSTRUCT KC, LLC
            </Heading>
            <Text mb={4}>
              At MAP Construct KC, we are driven by a steadfast commitment to integrity, openness, excellence, and community engagement. With a collective experience spanning over 25 years in the construction industry, our team brings a wealth of knowledge and expertise to every project we undertake. We take immense pride in delivering superior service at competitive rates, ensuring that our clients' expectations are not only met but exceeded.
              <br /><br />
              From residential homes to commercial buildings, we approach each project with a dedication to quality craftsmanship and attention to detail. Our goal is not just to build structures but to create spaces that inspire, enhance, and enrich the lives of those who inhabit them. Whether it's bringing your dream home to life or transforming a commercial space into a thriving hub of activity, we have the skills, passion, and vision to make it happen.
              <br /><br />
              At the heart of our philosophy is a belief in the power of community and collaboration. We understand that our success is intrinsically linked to the prosperity of the Kansas City area, which is why we are deeply committed to giving back and supporting local initiatives. By partnering with MAP Construct KC, you're not just getting a construction team – you're joining forces with a company dedicated to building a better Kansas City for generations to come.
              <br /><br />
              So, if you're ready to turn your vision into reality, trust MAP Construct KC to be your partner every step of the way. Together, let's build a brighter future for our community and create spaces that stand as a testament to our shared values and aspirations.
            </Text>
            <CustomButton children={'Learn More'} onClick={() => console.log('Button clicked')} />
          </Box>
          <Box flex={1}>
            <Image
              src="assets/images/logo2.png"
              alt="About"
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