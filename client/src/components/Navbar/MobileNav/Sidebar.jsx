import React from 'react';
import {
    Box,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Link,
} from '@chakra-ui/react';

export const Sidebar = () => {

  return (
    <>
    <DrawerOverlay />
    <DrawerContent bg="black" color="white">
    <DrawerCloseButton size="lg" />
    <DrawerHeader borderBottomWidth="1px" fontSize="2xl" p={4}>
        Menu
    </DrawerHeader>
    <DrawerBody>
        <VStack spacing={4} align="stretch">
        <Accordion allowMultiple>
            {/* Residential Section */}
        <AccordionItem>
            <AccordionButton>
            <Box flex="1" textAlign="left">
                Residential
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <VStack align="stretch">
                <Link  href="FullRehabs/index.html">
                Full Rehabs
                </Link>
                <Link  href="InvestmentPropertyAnalysis/index.html">
                Investment Property Analysis
                </Link>
                <Link href="Kitchen/index.html">
                Kitchen
                </Link>
                <Link href="Bathroom/index.html">
                Bathroom
                </Link>
                <Link href="RoomAddition/index.html">
                Room Addition
                </Link>
            </VStack>
            </AccordionPanel>
        </AccordionItem>
            {/* Commercial Section */}
        <AccordionItem>
            <AccordionButton>
            <Box flex="1" textAlign="left">
            Commercial
            </Box>
            <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
            <VStack align="stretch">
                <Link  href="HotelProjectImprovementPlans/index.html">
                Hotel Project Improvement Plans
                </Link>
                <Link  href="DelinquentSalesTaxAudition/index.html">
                Delinquent Sales Tax Audition
                </Link>
            </VStack>
            </AccordionPanel>
        </AccordionItem>
            {/* Info Section */}
        <AccordionItem>
            <AccordionButton>
                <Box flex="1" textAlign="left">
                Info
                </Box>
                <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
                <VStack align="stretch">
                <Link href="About/index.html" isExternal>
                    About Us
                </Link>
                <Link href="Gallery/index.html" isExternal>
                    Gallery
                </Link>
                <Link href="Blog/index.html" isExternal>
                    Blog
                </Link>
                </VStack>
            </AccordionPanel>
            
        </AccordionItem>
        <AccordionItem>
            <Link href="/permits-and-city-code-management" isExternal>
                <Box p={4} flex="1" textAlign="left" borderBottomWidth="1px">
                    Permits & City Code Management
                </Box>
            </Link>
            <Link href="/available-homes" isExternal>
                <Box p={4} flex="1" textAlign="left" borderBottomWidth="1px">
                    Available Homes
                </Box>
            </Link>
            <Link href="/contact-us" isExternal>
                <Box p={4} flex="1" textAlign="left" borderBottomWidth="1px">
                    Contact Us
                </Box>
            </Link>
        </AccordionItem>
        </Accordion>
        </VStack>
    </DrawerBody>
    </DrawerContent>
    </>
  );
};