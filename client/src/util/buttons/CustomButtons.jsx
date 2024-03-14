import React from 'react';
import { Button } from '@chakra-ui/react'; // Assuming you're using Chakra UI

export const CustomButton = ({ onClick, children }) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="black"
      leftIcon={<i className="fa fa-th" />}
      size="lg"
      borderRadius="full"
      px={8}
      py={6}
      background="black"
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing="wide"
      boxShadow="md"
      transition="all 0.2s"
      _hover={{
          transform: 'scale(1.05)',
          boxShadow: 'lg',
      }}
    >
      {children}
    </Button>
  );
};

