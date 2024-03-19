import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Spinner, Center, Stack, Container, GridItem, Grid  } from '@chakra-ui/react';

const dummyData = [
  
    {
        id: 1,
        subject: 'My Amazing Blog Post1',
        date: '2/15/2024',
        body:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat asperiores cumque consequatur doloremque ea recusandae 
        veniam nesciunt eum reprehenderit iure! Inventore deserunt error 
        cupiditate sequi sed doloribus, beatae suscipit dolor!`,
    },
    {
        id: 2,
        subject: 'My Amazing Blog Post2',
        date: '3/9/2024',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat asperiores cumque consequatur doloremque ea recusandae 
        veniam nesciunt eum reprehenderit iure! Inventore deserunt error 
        cupiditate sequi sed doloribus, beatae suscipit dolor!`,
    },
    {
        id: 3,
        subject: 'My Amazing Blog Post3',
        date: '3/17/2024',
        body:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat asperiores cumque consequatur doloremque ea recusandae 
        veniam nesciunt eum reprehenderit iure! Inventore deserunt error 
        cupiditate sequi sed doloribus, beatae suscipit dolor!`,
    },
    {
        id: 4,
        subject: 'My Amazing Blog Post4',
        date: '3/25/2024',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat asperiores cumque consequatur doloremque ea recusandae 
        veniam nesciunt eum reprehenderit iure! Inventore deserunt error 
        cupiditate sequi sed doloribus, beatae suscipit dolor!`,
    },
    {
        id: 5,
        subject: 'My Amazing Blog Post5',
        date: '2/15/2024',
        body:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat asperiores cumque consequatur doloremque ea recusandae 
        veniam nesciunt eum reprehenderit iure! Inventore deserunt error 
        cupiditate sequi sed doloribus, beatae suscipit dolor!`,
      },
      {
        id: 6,
        subject: 'My Amazing Blog Post6',
        date: '3/9/2024',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat asperiores cumque consequatur doloremque ea recusandae 
        veniam nesciunt eum reprehenderit iure! Inventore deserunt error 
        cupiditate sequi sed doloribus, beatae suscipit dolor!`,
      },
      {
        id: 7,
        subject: 'My Amazing Blog Post7',
        date: '3/17/2024',
        body:  `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat asperiores cumque consequatur doloremque ea recusandae 
        veniam nesciunt eum reprehenderit iure! Inventore deserunt error 
        cupiditate sequi sed doloribus, beatae suscipit dolor!`,
      },
      {
        id: 8,
        subject: 'My Amazing Blog Post8',
        date: '3/25/2024',
        body: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Quaerat asperiores cumque consequatur doloremque ea recusandae 
        veniam nesciunt eum reprehenderit iure! Inventore deserunt error 
        cupiditate sequi sed doloribus, beatae suscipit dolor!`,
      }
      
  ];
export const BlogComponent = () => {
  const [blogData, setBlogData] = useState(dummyData);
// fake blog data

// fetch blog data from api

//     useEffect(() => {
//     // Fetch the blog data from the API endpoint
//     const fetchBlogData = async () => {
//       try {
//         const response = await fetch('https://your-api-endpoint.com/blog-data');
//         const data = await response.json();
//         setBlogData(data);
//       } catch (error) {
//         console.error('Error fetching blog data:', error);
//       }
//     };

//     fetchBlogData();
//   }, []);

if (!blogData) {
    return (
      <Center h="200px">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
<Box bg="gray.100" py={16} px={4} >
<Container
  maxW="container.lg"
  borderRadius={'lg'}
  border="1px solid black" 
  position="relative" 
  overflow="hidden"
  boxShadow="lg"
>
  {/* Overlay with reduced opacity for background image and set z index */}
  <Box
    position="absolute"
    top={0}
    left={0}
    width="full"
    height="full"
    bgImage="url('assets/images/logo2.png')"
    bgRepeat="no-repeat"
    bgSize="cover"
    bgPosition="center"
    opacity={0.2} // Set the desired opacity for the background image
    zIndex={0} 
  ></Box>
    <Grid
      templateColumns={{base:"repeat(1, 1fr)" , md:"repeat(2, 1fr)" }} // Create 2 columns
      gap={6} // Adjust gap as needed
      overflowY="auto" // Enable vertical scrolling
      maxHeight="calc(75vh - 100px)" // Adjust the height calculation based on your header/nav/footer height
    >
      {blogData.map((post) => (
        // zIndex bring blogs above the background
        <GridItem zIndex={1} key={post.id} p={4} bgColor="rgba(255, 255, 255, 0.8)" borderRadius="md" boxShadow="lg">
          <Heading as="h2" size="xl" mb={4}>
            {post.subject} - {post.date}
          </Heading>
          <Text>{post.body}</Text>
        </GridItem>
      ))}
    </Grid>
  </Container>
</Box>
  );
};

