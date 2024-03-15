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

export const Sidebar = ( { handleRouting } ) => {


  
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
                <Link onClick={(e) => {handleRouting("Full_Rehabs")}}>
                    Full Rehabs
                </Link>
                <Link onClick={(e) => {handleRouting("Investment_Property_Analysis")}}>
                Investment Property Analysis
                </Link>
                <Link onClick={(e) => {handleRouting("Kitchen")}}>
                Kitchen
                </Link>
                <Link onClick={(e) => {handleRouting("Bathroom")}}>
                Bathroom
                </Link>
                <Link onClick={(e) => {handleRouting("Room_Addition")}}>
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
                <Link  onClick={(e) => {handleRouting("Hotel_Project_Improvement_Plans")}}>
                Hotel Project Improvement Plans
                </Link>
                <Link  onClick={(e) => {handleRouting("Delinquent_Sales_Tax_Audition")}}>
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
                <Link onClick={(e) => {handleRouting("About_Us")}}>
                    About Us
                </Link>
                <Link onClick={(e) => {handleRouting("Gallery")}}>
                    Gallery
                </Link>
                <Link onClick={(e) => {handleRouting("Blog")}}>
                    Blog
                </Link>
                </VStack>
            </AccordionPanel>
            
        </AccordionItem>
        <AccordionItem>
            <Link onClick={(e) => {handleRouting("City_Code")}}>
                <Box p={4} flex="1" textAlign="left" borderBottomWidth="1px">
                    Permits & City Code Management
                </Box>
            </Link>
            <Link onClick={(e) => {handleRouting("Available_Homes")}}>
                <Box p={4} flex="1" textAlign="left" borderBottomWidth="1px">
                    Available Homes
                </Box>
            </Link>
            <Link onClick={(e) => {handleRouting("Contact")}}>
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