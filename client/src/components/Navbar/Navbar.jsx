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
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';

export const Navbar = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Box>
          <a href="index.html">
            <Image src="assets/LOGO.jpg" alt="Logo" />
          </a>
        </Box>
        <Spacer />
        <Box display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Button variant="ghost" mr={4} href="index.html">
            Home
          </Button>
          <Menu>
            <MenuButton as={Button} variant="ghost" mr={4}>
              Residential
            </MenuButton>
            <MenuList>
              <MenuItem href="FullRehabs/index.html">Full Rehabs</MenuItem>
              <MenuItem href="InvestmentPropertyAnalysis/index.html">Investment Property Analysis</MenuItem>
              <MenuItem href="Kitchen/index.html">Kitchen</MenuItem>
              <MenuItem href="Bathroom/index.html">Bathroom</MenuItem>
              <MenuItem href="RoomAddition/index.html">Room Addition</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} variant="ghost" mr={4}>
              Commercial
            </MenuButton>
            <MenuList>
              <MenuItem href="HotelProjectImprovementPlans/index.html">Hotel Project Improvement Plans</MenuItem>
              <MenuItem href="DelinquentSalesTaxAudition/index.html">Delinquent Sales Tax Audition</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton as={Button} variant="ghost" mr={4}>
              Info
            </MenuButton>
            <MenuList>
              <MenuItem href="About/index.html">About Us</MenuItem>
              <MenuItem href="Gallery/index.html">Gallery</MenuItem>
              <MenuItem href="Blog/index.html">Blog</MenuItem>
            </MenuList>
          </Menu>
          <Button variant="ghost" mr={4} href="PermitsandCityCodeManagement/index.html">
            Permits and City Code Management
          </Button>
          <Button variant="ghost" mr={4} href="AvailableHomes/index.html">
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