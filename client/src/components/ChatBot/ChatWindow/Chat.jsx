import React, { useState, useEffect, useRef } from 'react';
import { Box, Input, Button, Text, VStack, Heading, Spinner } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import axios from 'axios';



const systemMessage = { 
  "role": "system", "content": "Explain things like you're talking to a person who is an investor in real estate."
}

export const ChatWindow = ({ hide }) => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState('');

  const chatWindowRef = useRef(null);
  const chatWindowRef2 = useRef(null);
  
  const [messages, setMessages] = useState([
    {
      message: "Hello, Im your proerty professional! Here to serve.",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  
  useEffect(() => {
    // Scroll to the bottom of the chat window when new messages are added
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    chatWindowRef2.current.scrollTop = chatWindowRef2.current.scrollHeight;
  }, [messages, isTyping]);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target)) {
        hide();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    // Clean up
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [hide]); // Ensure `hide` is stable or wrapped in useCallback if defined within a parent component
  

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Check if Enter key is pressed without Shift key
      e.preventDefault(); // Prevent the default action to avoid newline in input
      handleSendClick();
    }
  }

  // process the message
  const processMessage = async (message) => {
    setInputMessage('');
    console.log("message:"+message)
    const newMessage = {
      message: message,
      direction: 'outgoing',
      sender: "user"
    };
    // set the state of
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await formatMessages(newMessages);
  }

  // Format messages for API
  const formatMessages = async (messages) => {

    let apiMessages = messages.map((messageObject) => {
      let role = messageObject.sender === "ChatGPT"?"assistant":"user"
      return { role: role, content: messageObject.message}
    });
    
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage, // The system message DEFINES the logic of our chat
        ...apiMessages // The messages from our chat with ChatGPT
      ],
        top_p: 0.9, // A value between 0 and 1, typically around 0.9
        temperature: 0.7, // A value between 0 and 1 where lower means more deterministic
        max_tokens: 150 // The maximum number of tokens to generate in the response
    };
  
    const config = {
      headers: {
        "Authorization": `Bearer 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`,
        "Content-Type": "application/json",
      }
    };

      try {
        const response = await axios.post("https://api.openai.com/v1/chat/completions", apiRequestBody, config);
        const data = response.data
        

        // Extract the assistant's message from the response
        const assistantMessage = data.choices[0].message.content; // this is correct
        
          // Create a new message object with only the necessary properties
        const newMessage = {
          message: assistantMessage,
          sender: "ChatGPT"
        };
        
        setMessages([...messages, newMessage]);
        console.log(messages);
        setIsTyping(false);
      } catch (error) {
        console.error('Error:', error);
      }
    } // end of formatMessage


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
    <Box flex="1" overflowY="auto" p="4" display="flex" flexDirection="column" ref={chatWindowRef2}>
      {messages.map((message, index) => (
      <Box
        key={index}
        bg={message.sender === 'user' ? 'blue.100' : 'gray.100'}
        borderRadius="md"
        p="2"
        mb="2"
        alignSelf={message.sender === 'user' ? 'flex-start' : 'flex-end'}
        maxWidth="80%"
      >
        <Text>{message.message}</Text>
      </Box>
        ))}
        {isTyping && (  
          <Box
            bg="gray.100"
            borderRadius="md"
            p="2"
            mb="2"
            alignSelf="flex-start"
            maxWidth="80%"
            display="flex"
            alignItems="center"
          >
            <Spinner size="sm" mr="2" />
            <Text>Typing...</Text>
          </Box>
      )}
    </Box>
    {/* Handlesthe input text */}
      <Box p="4" borderTopWidth="1px">
        <Input
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message..."
          onKeyDown={() => handleKeyPress(inputMessage)}
          mr="2"
        />
        <Button onClick={() => processMessage(inputMessage)} colorScheme="blue" mr={4} mt={2}>
          Send
        </Button>
      </Box>
    </Box>
  );  
}
