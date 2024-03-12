import React, {useState} from 'react';
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
    useBreakpointValue,
} from '@chakra-ui/react';
import { Sidebar } from './MobileNav/Sidebar';
import { HamburgerIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const CityCodeButtonText = useBreakpointValue({ base: "Permits & City Code", lg: "Permits & Code Management", xl: "Permits & City Code Management" });
    const ContactButtonText = useBreakpointValue({ base: "Contact", lg: "Contact Us", xl: "Contact Us" });
    
    const toggleDrawer = () => setIsOpen(!isOpen);
    const onClose = () => setIsOpen(false);
  return (
    <>
    <Box bg="gray.100" display="flex" py={4}>
      <Flex mx={2} >
        <Box>
          <a href="index.html">
            <Image src="assets/LOGO.jpg" alt="Logo" />
          </a>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent={'space-evenly'}>
          <Button variant="ghost" pr={7} fontSize={{ base: '12px', sm: '14px', md: '16px' }} href="index.html">
            Home
          </Button>
          <Menu >
            <MenuButton as={Button} variant="ghost" pr={14} width={'auto'}>
              Residential
              <ChevronDownIcon/>
            </MenuButton>
            <MenuList >
              <MenuItem href="FullRehabs/index.html" >Full Rehabs</MenuItem>
              <MenuItem href="InvestmentPropertyAnalysis/index.html">Investment Property Analysis</MenuItem>
              <MenuItem href="Kitchen/index.html">Kitchen</MenuItem>
              <MenuItem href="Bathroom/index.html">Bathroom</MenuItem>
              <MenuItem href="RoomAddition/index.html">Room Addition</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} variant="ghost" pr={16}>
              Commercial
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem href="HotelProjectImprovementPlans/index.html">Hotel Project Improvement Plans</MenuItem>
              <MenuItem href="DelinquentSalesTaxAudition/index.html">Delinquent Sales Tax Audition</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} variant="ghost" mr={20}>
              Info
              <ChevronDownIcon />
            </MenuButton>
            <MenuList>
              <MenuItem href="About/index.html">About Us</MenuItem>
              <MenuItem href="Gallery/index.html">Gallery</MenuItem>
              <MenuItem href="Blog/index.html">Blog</MenuItem>
            </MenuList>
          </Menu>
          <Button variant="ghost" mr={24} href="PermitsandCityCodeManagement/index.html">
          {CityCodeButtonText}
          </Button>
          <Button variant="ghost" mr={12} href="AvailableHomes/index.html">
            Available Homes
          </Button>
          <Button variant="ghost" mr={4} href="ContactUS/index.html">
            {ContactButtonText}
          </Button>
          <InputGroup size="sm">
            <Input type="search" placeholder="Search" />
            <InputRightElement>
              <IconButton icon={<SearchIcon />} size="sm" variant="ghost" />
            </InputRightElement>
          </InputGroup>
        </Box>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          icon={<HamburgerIcon />}
          variant="ghost"
          aria-label="Toggle Navigation"
          onClick={toggleDrawer}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="top" onClose={onClose} >
        {isOpen && <Sidebar />}
        </Drawer>
    </Box>
    </>
  );
};