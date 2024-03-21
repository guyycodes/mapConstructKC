import React, {useState, useReducer, useEffect} from 'react';
import {
    Box,
    Flex,
    Spacer,
    Image,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Input,
    InputGroup,
    InputRightElement,
    Drawer,
    useBreakpointValue, // Importing the useBreakpointValue hook for responsive design.
} from '@chakra-ui/react';
import {
  HOME, 
  FULL_REHABS, 
  INVESTMENT_PROPERTY_ANALYSIS, 
  KITCHEN, 
  BATHROOM, 
  ROOM_ADDITION, 
  HOTEL_PROJECT_IMPROVEMENT_PLANS, 
  DELINQUENT_SALES_TAX_AUDITION, 
  ABOUT_US, 
  GALLERY, BLOG, CITY_CODE, 
  AVALIABLE_HOMES, 
  CONTACT,
  SEARCH
  } from '../../util/actions/actions';
import { Sidebar } from './MobileNav/Sidebar';
import { HamburgerIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import logo from '/assets/images/LOGO.jpg';
import { useRouteContext } from '../../util/routingContext/routeContext';

// The Navbar functional component definition
export const Navbar = () => {
  // State hook to manage open/close status of a sidebar/drawer
    const [isOpen, setIsOpen] = useState(false);

   // Accessing the context's dispatch function to update global state its essential to use dispatch from the context or it will only update locally
    const { dispatch } = useRouteContext();

    // Hook to get responsive text values based on the current viewport size for specific UI elements
    const CityCodeButtonText = useBreakpointValue({ base: "Permits & City Code", lg: "Permits & Code Management", xl: "Permits & City Code Management" });
    const ContactButtonText = useBreakpointValue({ base: "Contact", lg: "Contact Us", xl: "Contact Us" });
    
    // Function to toggle the sidebar/drawer's open/close status
    const toggleDrawer = () => setIsOpen(!isOpen);

    // Function to close the sidebar/drawer
    const onClose = () => setIsOpen(false);

    // Function to handle routing based on the navbar item clicked
    const handleRouting = (clickedText) => {
      // Dispatch actions for each possible navigation item - setting the state in the global context
      // Each dispatch checks if the clicked item matches a specific route, and updates the global state accordingly
      dispatch({ type: HOME, payload: clickedText === 'Home' ? 1 : 0 });
      dispatch({ type: FULL_REHABS, payload: clickedText === 'Full_Rehabs' ? 1 : 0 });
      dispatch({ type: INVESTMENT_PROPERTY_ANALYSIS, payload: clickedText === 'Investment_Property_Analysis' ? 1 : 0 });
      dispatch({ type: KITCHEN, payload: clickedText === 'Kitchen' ? 1 : 0 });
      dispatch({ type: BATHROOM, payload: clickedText === 'Bathroom' ? 1 : 0 });
      dispatch({ type: ROOM_ADDITION, payload: clickedText === 'Room_Addition' ? 1 : 0 });
      dispatch({ type: HOTEL_PROJECT_IMPROVEMENT_PLANS, payload: clickedText === 'Hotel_Project_Improvement_Plans' ? 1 : 0 });
      dispatch({ type: DELINQUENT_SALES_TAX_AUDITION, payload: clickedText === 'Delinquent_Sales_Tax_Audition' ? 1 : 0 });
      dispatch({ type: ABOUT_US, payload: clickedText === 'About_Us' ? 1 : 0 });
      dispatch({ type: GALLERY, payload: clickedText === 'Gallery' ? 1 : 0 });
      dispatch({ type: BLOG, payload: clickedText === 'Blog' ? 1 : 0 });
      dispatch({ type: CITY_CODE, payload: clickedText === 'City_Code' ? 1 : 0 });
      dispatch({ type: AVALIABLE_HOMES, payload: clickedText === 'Available_Homes' ? 1 : 0 });
      dispatch({ type: CONTACT, payload: clickedText === 'Contact' ? 1 : 0 });
      dispatch({ type: SEARCH, payload: clickedText === 'Search' ? 1 : 0 });
  };

  return (
    <>
    <Box bg="gray.100" display="flex" py={4} zIndex={3}>
      <Flex mx={2} alignItems='center'>
        <Box minWidth="150px" height="auto">
          <a href="index.html">
            <Image src={logo} alt="Logo" objectFit="contain" />
          </a>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', md: 'flex' }} flexGrow={1} alignItems="center" justifyContent={'space-evenly'}>
          <Button onClick={() => handleRouting("Home")} variant="ghost" pr={7} fontSize={{ base: '12px', sm: '14px', md: '16px' }} href="index.html">
            Home
          </Button>
          {/* Residential menu with dropdown options. */}
          <Menu>
            <MenuButton as={Button} variant="ghost" pr={14} width={'auto'}>
              Residential
              <ChevronDownIcon/>
            </MenuButton>
            <MenuList width={'fit-content'}>
          {/* Pass the menu item text directly to the click handler */}
        <MenuItem onClick={() => handleRouting("Full_Rehabs")}>Full Rehabs</MenuItem>
        <MenuItem onClick={() => handleRouting("Investment_Property_Analysis")}>Investment Property Analysis</MenuItem>
        <MenuItem onClick={() => handleRouting("Kitchen")}>Kitchen</MenuItem>
        <MenuItem onClick={() => handleRouting("Bathroom")}>Bathroom</MenuItem>
        <MenuItem onClick={() => handleRouting("Room_Addition")}>Room Addition</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} variant="ghost" pr={16}>
              Commercial
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleRouting("Hotel_Project_Improvement_Plans")}>Hotel Project Improvement Plans</MenuItem>
              <MenuItem onClick={() => handleRouting("Delinquent_Sales_Tax_Audition")}>Delinquent Sales Tax Audition</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} variant="ghost" mr={20}>
              Info
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => handleRouting("About_Us")}>About Us</MenuItem>
              <MenuItem onClick={() => handleRouting("Gallery")}>Gallery</MenuItem>
              <MenuItem onClick={() => handleRouting("Blog")}>Blog</MenuItem>
            </MenuList>
          </Menu>
          {/* Additional menus and buttons follow a similar pattern. */}
          <Button variant="ghost" mr={24} onClick={() => handleRouting("City_Code")}>
          {CityCodeButtonText}
          </Button>
          <Button variant="ghost" mr={12} onClick={() => handleRouting("Available_Homes")}>
            Available Homes
          </Button>
          <Button variant="ghost" mr={4} onClick={() => handleRouting("Contact")}>
            {ContactButtonText}
          </Button>
          {/* <InputGroup size="sm">
            <Input type="search" onClick={() => handleRouting("Search")} placeholder="Search" />
            <InputRightElement>
              <IconButton icon={<SearchIcon />} size="sm" variant="ghost" />
            </InputRightElement>
          </InputGroup> */}
        </Box>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={<HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
          onClick={toggleDrawer}  /*Button to toggle the navigation drawer on smaller screens.*/
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose} >
        {isOpen && <Sidebar handleRouting={handleRouting}/>} {/*Render the sidebar component when the drawer is open.*/}
        </Drawer>
    </Box>
    </>
  );
};