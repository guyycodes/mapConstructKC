import React, {useState} from 'react'
import { Box, Text, Button, Flex, Slide} from '@chakra-ui/react'
import { CustomButton } from '../../util/buttons/CustomButtons'
import { FcAbout, FcAssistant } from "react-icons/fc"
import { keyframes } from '@emotion/react';
import { ChatWindow } from './ChatWindow/Chat';


export const ChatContainer = () =>{
    const [isHovered, setIsHovered] = useState(false);
    let leftVar = "9rem"
    const [showChatWindow, setShowChatWindow] = useState(false);

    const handleChatNowClick = () => {
      setShowChatWindow(true);
    };

    const hide = () =>{
        setShowChatWindow(false)
    }

    const leftHalfMove = keyframes`
    0% {
        width: 0;
        opacity: 0;
        left: 0;
      }
      100% {
        width: auto;
        opacity: 1;
        background: url("https://u-static.fotor.com/images/text-to-image/result/PRO-b684fa1c35d648049a5524d3ac49aaba.jpg") no-repeat center center;
        left: -${leftVar};
      }
    `;
    return (
      <Box
        as='aside'
        position='fixed'
        zIndex='banner'
        bottom='10'
        width='auto'
        height='auto'
        right='0'
      >
        <Flex flexDirection='row' alignItems="center" >
          <Box
            height="auto"
            width="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mr="3rem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            position="relative"
            sx={{
                '.assistantIcon': {
                  position: 'absolute',
                  transition: 'all .25s ease-in-out',
                  opacity: isHovered ? 1 : 0,
                  transform: isHovered ? 'scale(1)' : 'scale(0)',
                  display: showChatWindow ? 'none' : 1,
                },
                '.fcAboutIcon': {
                  clipPath: 'circle(75% at center)', // Initial clipPath value
                  transition: 'clip-path .25s ease-in-out',
                  display: showChatWindow ? 'none' : 1,
                },
                '.chatNowText': {
                    position: 'absolute',
                    left: `-${leftVar}`,
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '8px 16px',
                    borderRadius: '4px',
                    opacity: 0,
                    width: 0,
                    overflow: 'visible',
                    whiteSpace: 'nowrap',
                    animation: isHovered ? `${leftHalfMove} .5s ease-in-out forwards` : null,
                  },
                ':hover': {
                  '.fcAboutIcon': {
                    clipPath: 'circle(0px at center)', // clipPath value on hover
                    zIndex:-1,
                  },
                },
              }}
            >
            <FcAbout className="fcAboutIcon" size="8rem" style={{ transform: 'scaleX(-1)' }} />
            <FcAssistant className="assistantIcon" size="4rem" color="blue"  />
            <Button className="chatNowText" onClick={handleChatNowClick}>
            Chat with us now👋
          </Button>
        </Box>
      </Flex>
      <Slide direction="bottom" in={showChatWindow} style={{ position: 'absolute', bottom: 550 }}>
        <Box position="absolute" right="0">
          {showChatWindow && <ChatWindow hide={hide} />}
        </Box>
      </Slide>
      </Box>
    );
  };