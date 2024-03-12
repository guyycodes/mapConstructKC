import React from 'react';
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
} from '@chakra-ui/react';
import { HamburgerIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex  mx={2} >
        <Box>
          <a href="index.html">
            <Image src="assets/LOGO.jpg" alt="Logo" />
          </a>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', md: 'flex' }} alignItems="center" justifyContent={'space-evenly'}>
          <Button variant="ghost" pr={7} href="index.html">
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
            Permits & City Code Management
          </Button>
          <Button variant="ghost" mr={12} href="AvailableHomes/index.html">
            Available Homes
          </Button>
          <Button variant="ghost" mr={4} href="ContactUS/index.html">
            Contact Us
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
        />
      </Flex>
    </Box>
  );
};