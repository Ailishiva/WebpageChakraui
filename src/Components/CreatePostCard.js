// import { ChakraProvider, Box, Flex, Avatar, Textarea, IconButton, Text } from '@chakra-ui/react';
// import { HiPhotograph, HiFilm, HiBriefcase, HiPencilAlt } from 'react-icons/hi';

// function CreatePostCard() {
//   return (
//     <ChakraProvider>
//       <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md"  maxWidth="620px" margin="15px auto">
//         <Flex alignItems="center" mb={4}>
//           <Avatar size="sm" name="Your Name" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/28/09/normal-people-0.jpg?quality=75&width=1200&auto=webp" mr={2} />
//           <Textarea
//             placeholder="Start a Post"
//             resize="none"
//             borderRadius="md"
//             border="1px"
//             borderColor="gray.200"
//             p={2}
//             _focus={{ borderColor: 'teal.500' }}
//           />
//         </Flex>
//         <Flex justifyContent="space-around">
//           <IconButton icon={<HiPhotograph />} aria-label="Photo" variant="ghost" colorScheme="teal" size="sm" />
//           <Text ml={-9}>Photo</Text>
//           <IconButton icon={<HiFilm />} aria-label="Video" variant="ghost" colorScheme="teal" size="sm" ml={2} />
//           <Text ml={-9}>Video</Text>
//           <IconButton icon={<HiBriefcase />} aria-label="Job" variant="ghost" colorScheme="teal" size="sm" ml={2} />
//           <Text ml={-9}>Job</Text>
//           <IconButton icon={<HiPencilAlt />} aria-label="Write Article" variant="ghost" colorScheme="teal" size="sm" ml={2} />
//           <Text ml={-9}>Write Article</Text>
//         </Flex>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default CreatePostCard;
import { ChakraProvider, Box, Flex, Avatar, Textarea, IconButton, Text, TagLabel, Tag, HStack, TagCloseButton} from '@chakra-ui/react';
import { HiPhotograph, HiFilm, HiBriefcase, HiPencilAlt } from 'react-icons/hi';

function CreatePostCard() {
  return (
    <ChakraProvider>
      <Flex justifyContent="space-between">
       
        <Box p={4} borderWidth="1px" borderRadius="md" boxShadow="md" Width="620px" marginLeft="30rem" marginTop="10px" >
          {/* Center Card */}
          <Flex alignItems="center" mb={4} width="585px">
            <Avatar size="sm" name="Your Name" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/28/09/normal-people-0.jpg?quality=75&width=1200&auto=webp" mr={2} />
            <Textarea
              placeholder="Start a Post"
              resize="none"
              borderRadius="md"
              border="1px"
              borderColor="gray.200"
              p={2}
              _focus={{ borderColor: 'teal.500' }}
            />
          </Flex>
          <Flex justifyContent="space-around">
            <IconButton icon={<HiPhotograph />} aria-label="Photo" variant="ghost" colorScheme="teal" size="sm" />
            <Text ml={-9}>Photo</Text>
            <IconButton icon={<HiFilm />} aria-label="Video" variant="ghost" colorScheme="teal" size="sm" ml={2} />
            <Text ml={-9}>Video</Text>
            <IconButton icon={<HiBriefcase />} aria-label="Job" variant="ghost" colorScheme="teal" size="sm" ml={2} />
            <Text ml={-9}>Job</Text>
            <IconButton icon={<HiPencilAlt />} aria-label="Write Article" variant="ghost" colorScheme="teal" size="sm" ml={2} />
            <Text ml={-9}>Write Article</Text>
          </Flex>
        </Box>
        
        
       
      </Flex>
    </ChakraProvider>
  );
}

export default CreatePostCard;
