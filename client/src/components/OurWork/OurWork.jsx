import React, { useState, useEffect } from 'react';
import { Box, Grid, Image, Heading, Text, AspectRatio } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';


import bathroomRemodel from '/assets/images/imageReveal/bathroomRemodel.JPG';
import bathroomTile from '/assets/images/imageReveal/bathroomTile.JPG';
import customDeck from '/assets/images/imageReveal/customDeck.JPG';
import customKitchen from '/assets/images/imageReveal/customKitchen.JPG';
import customShower from '/assets/images/imageReveal/customShower.JPG';
import excavation from '/assets/images/imageReveal/excavation.JPG';
import swimmingPool from '/assets/images/imageReveal/swimmingPool.JPG';
import tvFireplace from '/assets/images/imageReveal/TV_fireplace.JPG';

import path1 from '/assets/images/imageReveal/imageReveal2/bears.jpg';
import path2 from '/assets/images/imageReveal/imageReveal2/lions.jpg';
import path3 from '/assets/images/imageReveal/imageReveal2/porchAfter.JPG';
import path4 from '/assets/images/imageReveal/imageReveal2/porchBefore.jpg';
import path5 from '/assets/images/imageReveal/imageReveal2/skidster.JPG';
import path6 from '/assets/images/imageReveal/imageReveal2/tiger.jpg';

// Initial sets of images to be displayed.
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
// Additional or newer images that could be included in the animated rotation.
const newImagePaths = [path1, path2, path3, path4, path5, path6];
// displays the work portfolio.
export const WorkSection = () => {
    // `currentSet` holds the currently displayed images, each with a unique `key`.
  const [currentSet, setCurrentSet] = useState(
    imagePaths.map((path, index) => ({ path, key: `image-${index}` }))
  );
  // `animateSet` keeps track of which images are currently being animated out.
  const [animateSet, setAnimateSet] = useState(new Set());

  // `newImages` will store the new images that will replace the ones that are being faded out.
  const [newImages, setNewImages] = useState([]);

    // This effect runs on component mount. It sets up an interval to cycle images between old and new.
  useEffect(() => {
    // Defined a function to handle the fading out and in of images.
    const cycleAnimateSet = () => {
    // Combine the two sets of images to allow selecting from all available options.
      const allImages = [...newImagePaths, ...imagePaths]
    // Choose which images are going to fade out.
      const fadeOutIndexes = selectRandomIndexes(currentSet.length, 2);
    // Choose new images that will fade in.
      const fadeInImages = selectRandomImages(allImages, 8);

      if (fadeInImages.length > 0) {
        // Prepare to animate selected images out.
        setAnimateSet(fadeOutIndexes);
        // Store new images to be used when fading in.
        setNewImages(fadeInImages);
        // After a delay, replace the faded out images with new ones.
        setTimeout(() => {
          setCurrentSet((prevSet) => {
            const updatedSet = [...prevSet];
            fadeOutIndexes.forEach((index, i) => {
              updatedSet[index] = { path: fadeInImages[i], key: `image-${Date.now()}-${i}` };
            });
            return updatedSet;
          });
          // Clear the set to allow for new animations.
          setAnimateSet(new Set());
        }, 750); // This delay matches the fade-out animation
      }
    };
    // Start the initial animation cycle and set up an interval for continuous cycling.
    cycleAnimateSet();
    // Clear the interval.
    const interval = setInterval(cycleAnimateSet, 1750);
    return () => clearInterval(interval);
  }, []);
    // Select a given number of unique random indexes from the current set.
    function selectRandomIndexes(total, numToSelect) {
        let indexes = new Set();
        while (indexes.size < numToSelect) {
        let r = Math.floor(Math.random() * total);
        indexes.add(r);
        }
        return indexes;
    }
    // Choose a specified number of images from the available paths. This ensures no duplicates.
    function selectRandomImages(imagePaths, numToSelect) {
        // Filter out any invalid image paths first.
        const validImagePaths = imagePaths.filter((path) => path && path.trim() !== '');
        // Return an empty array if no valid images are found.
        if (validImagePaths.length === 0) {
            return [];
        }
        // Shuffle the array and select the required number of images.
        const shuffled = [...validImagePaths].sort(() => 0.5 - Math.random());
        const selectedImages = [];
        let i = 0;
        while (selectedImages.length < numToSelect && i < shuffled.length) {
            const path = shuffled[i];
            if (path && path.trim() !== '') {
            selectedImages.push(path);
        }
        i++;
        }
        return selectedImages;
    }
    // Render the Box container
  return (
    <Box id="work" py={16} px={4}>
      <Heading as="h3" textAlign="center" mb={4}>
        OUR WORK
      </Heading>
      <Text fontSize="xl" textAlign="center" mb={16}>
        What we've done for people
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {currentSet.map(({ path, key }, index) => (
          <AnimatePresence key={key} >
            <motion.div
                  key={key}
                  // initial={{ opacity: 0 }}
                  // animate={{ opacity: 1 }}
                  // exit={{ opacity: 0 }}
                  whileHover={{ scale: 2.05, zIndex:'5' }}
                >
            {/* AspectRatio keeps the images in a correct aspect ratio. */}
              <AspectRatio ratio={1}>
                <Image
                  src={path}
                  alt={`Work image ${index}`}
                  objectFit="cover"
                  borderRadius="md"
                  boxSize="100%"
                />
              </AspectRatio>
            </motion.div>
          </AnimatePresence>
        ))}
      </Grid>
    </Box>
  );
};