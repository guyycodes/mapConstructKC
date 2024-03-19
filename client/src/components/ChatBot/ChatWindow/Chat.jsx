import React, { useState, useEffect, useRef } from 'react';
import { Box, Input, Button, Text, VStack, Heading } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import axios from 'axios';

export const ChatWindow = ({ hide }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const chatWindowRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        hide();
      }
    };

    // Add event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [hide]); // Ensure `hide` is stable or wrapped in useCallback if defined within a parent component


  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are added
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() !== '') {
      const userMessage = {
        role: 'user',
        content: inputMessage,
      };

      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputMessage('');

      try {
        const response = await axios.post('API_ENDPOINT', {
          messages: [...messages, userMessage],
        });

        const assistantMessage = response.data.choices[0].message;
        setMessages((prevMessages) => [...prevMessages, assistantMessage]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Box
      width="400px"
      height="500px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      mr={5}
      mb={14}
      boxShadow="md"
      ref={chatWindowRef}
      bg="white"
    >
        {/* Header Section */}
      <VStack
        p="4"
        bgGradient="linear(to-r, blue.200, blue.300)"
        borderTopRadius="md"
        alignItems="flex-start"
        spacing={1}
      >
        <Heading as="h3" size="sm" color="white">
          Hi there 👋
        </Heading>
        <Text color="white" fontSize="xs">
          We typically reply within a few minutes.
        </Text>
        <ChevronDownIcon color="white" onClick={hide} cursor="pointer" />
      </VStack>
        {/* Messages Section */}
      <Box flex="1" overflowY="auto" p="4" >
        {messages.map((message, index) => (
          <Box
            key={index}
            bg={message.role === 'user' ? 'blue.100' : 'gray.100'}
            borderRadius="md"
            p="2"
            mb="2"
            alignSelf={message.role === 'user' ? 'flex-end' : 'flex-start'}
            maxWidth="80%"
          >
            <Text>{message.content}</Text>
          </Box>
        ))}
      </Box>
      <Box p="4" borderTopWidth="1px">
        <Input
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
          mr="2"
        />
        <Button onClick={handleSendMessage} colorScheme="blue" mr={4} mt={2}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

