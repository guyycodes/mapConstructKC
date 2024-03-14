import React from 'react';
import { Box, Container, Heading, Text,  Image, Stack } from '@chakra-ui/react';
import { CustomButton } from '../../../util/buttons/CustomButtons';

export const DelinquentTax= () => {
  return (
    <Box bg="gray.100" py={16}>
      <Container maxW="container.lg">
        <Stack direction={['column', 'row']} spacing={8} align="flex-start">
          <Box flex={1}>
            <Heading as="h3" size="lg" mb={4}>
            ABOUT DELINQUENT SALES TAX AUDITIONS
            </Heading>
            <Text mb={4} as="div">
            At MAP Construct KC, we understand the importance of staying compliant with tax regulations to ensure the financial health and stability of your business. Delinquent Sales Tax Audits are comprehensive assessments conducted by tax authorities to identify and rectify any discrepancies or overdue payments in your sales tax records.

            Our team specializes in assisting businesses facing Delinquent Sales Tax Audits by providing expert guidance and support throughout the audit process. We work closely with our clients to review their sales tax records, identify potential issues, and develop effective strategies to address any outstanding liabilities.
            <br /><br />
            <strong>During a Delinquent Sales Tax Audit, our experienced professionals will:</strong> 
              <br /><br />
              <strong>1. Conduct a thorough review:</strong> We meticulously examine your sales tax records to identify any discrepancies or errors that may have led to delinquency.
              <br /><br />
              <strong>2. Assist with documentation:</strong> We help gather and organize the necessary documentation required for the audit, ensuring compliance with audit requests and deadlines.
              <br /><br />
              <strong>3. Negotiate on your behalf:</strong>  Our team advocates on your behalf during discussions with tax authorities, aiming to minimize penalties and reach a favorable resolution.
              <br /><br />
              <strong>4. Implement corrective measures:</strong> We work with you to implement corrective measures to address any identified issues and prevent future delinquencies.
              <br /><br />
              <strong>5. Provide ongoing support:</strong> Our commitment to your success extends beyond the audit process. We offer ongoing support and guidance to help you maintain compliance with sales tax regulations moving forward.
              <br /><br />
              By partnering with MAP Construct KC for your Delinquent Sales Tax Audit needs, you can trust that your business will receive personalized attention and expert assistance every step of the way. Contact us today to learn more about how we can help navigate the complexities of sales tax audits and safeguard the financial well-being of your business.
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
