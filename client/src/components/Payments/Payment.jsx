import React, { useEffect } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import ReactGA from 'react-ga';

export const PaymentPortal = () => {
    
    useEffect(() => {
        ReactGA.initialize('G-16BJ7W3HPE');
        ReactGA.pageview(window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
    }, []);

    const handleCheckoutRedirect = () => {
        // Redirect user to Stripe Checkout page
        window.location.href = "https://buy.stripe.com/00g7uh0FNeHZ47KcMM";
    };

    return (
        <Box>
            <Heading as="h1" size="xl" mb={4}>
                MapConstruc Payment Gateway
            </Heading>
            <Text mb={8}>Please complete your payment:</Text>
            <Button colorScheme="blue" onClick={handleCheckoutRedirect}>
                Proceed to Payment
            </Button>
        </Box>
    );
};