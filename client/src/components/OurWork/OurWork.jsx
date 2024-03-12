import React, { useState, useEffect } from 'react';
import { Box, Grid, Image, Heading, Text, AspectRatio } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import bathroomRemodel from '../../assets/images/imageReveal/bathroomRemodel.JPG';
import bathroomTile from '../../assets/images/imageReveal/bathroomTile.JPG';
import customDeck from '../../assets/images/imageReveal/customDeck.JPG';
import customKitchen from '../../assets/images/imageReveal/customKitchen.JPG';
import customShower from '../../assets/images/imageReveal/customShower.JPG';
import excavation from '../../assets/images/imageReveal/excavation.JPG';
import swimmingPool from '../../assets/images/imageReveal/swimmingPool.JPG';
import tvFireplace from '../../assets/images/imageReveal/TV_fireplace.JPG';

const imagePaths = [
    bathroomRemodel,
    bathroomTile,
    customDeck,
    customKitchen,
    customShower,
    excavation,
    swimmingPool,
    tvFireplace,
];

export const WorkSection = () => {
    const [currentSet, setCurrentSet] = useState(imagePaths); // Initialize with all images displayed
    const [animateSet, setAnimateSet] = useState([]); // Images currently being animated
  
    useEffect(() => {
      cycleAnimateSet();
      const interval = setInterval(cycleAnimateSet, 1000); // Change animation set every 4 seconds
      return () => clearInterval(interval);
    }, []);
  
    const cycleAnimateSet = () => {
      setCurrentSet(imagePaths); // Reset to show all images
      const selected = selectRandomImages(imagePaths.length, 3);
      setAnimateSet(selected);
    };
  
    function selectRandomImages(total, numToSelect) {
      let indexes = [];
      while (indexes.length < numToSelect) {
        let r = Math.floor(Math.random() * total);
        if (!indexes.includes(r)) {
          indexes.push(imagePaths[r]);
        }
      }
      return indexes;
    }
  
    return (
      <Box id="work" py={16} px={4}>
        <Heading as="h3" textAlign="center" mb={4}>
          OUR WORK
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={16}>
          What we've done for people
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {currentSet.map((image, index) => (
            <AspectRatio key={`${image}-${index}`} ratio={1}>
              <Box opacity={animateSet.includes(image) ? 0 : 1}>
                <Image src={image} alt={`Work image ${index}`} objectFit="cover" borderRadius="md" boxSize="100%" />
              </Box>
            </AspectRatio>
          ))}
          <AnimatePresence>
            {animateSet.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
              >
                <AspectRatio ratio={1}>
                  <Image src={image} alt={`Animated work image ${index}`} objectFit="cover" borderRadius="md" boxSize="100%" />
                </AspectRatio>
              </motion.div>
            ))}
          </AnimatePresence>
        </Grid>
      </Box>
    );
  };