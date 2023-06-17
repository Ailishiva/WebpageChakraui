import { Box, Flex, Avatar, Text, Image , IconButton} from "@chakra-ui/react";
 import {FaGlobeAsia} from 'react-icons/fa'
 import { BiLike, BiCommentDetail, BiRepost} from 'react-icons/bi';
 import {AiFillLike} from 'react-icons/ai'
 import {BsSend} from 'react-icons/bs'
//import { FaBeer } from 'react-icons/fa'
function LinkedInPostCard4({ name, position, company, content, date, likes, comments }) {
  return (
    <Box
    p={4} borderWidth="1px" borderRadius="md" boxShadow="md" maxWidth="620px" margin="13px auto"
    >
      <Flex align="center" mb={4}>
      <Avatar src="https://i.pinimg.com/736x/b2/54/ea/b254ea1ec256b93c61aecb2aca62e277.jpg" borderRadius="50%" size="sm" ml={4} mt={-1} height=" 50px" width= "53px" mr= "20px"/>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.500">
            {position} at {company}
          </Text>
          <Flex align="center">
          <Text>1d . </Text>
          <FaGlobeAsia markerHeight={2}/>  
          </Flex>  
        </Box>
      </Flex>
      <Flex ml={3} alignItems="center">
      <AiFillLike/>
       <Text mb={4} justifyContent="flex-start">{content}</Text>

        </Flex>
       <Image src="https://media.licdn.com/dms/image/D5622AQGZD1C-Usxg6g/feedshare-shrink_800/0/1686990947188?e=1689811200&v=beta&t=XrEB9K_6Q4WdO03ey6eO74ofD4VOUbzwE5XTs9JuYkg"/>
       <Flex justify="space-between" align="center"  margin= "9px" borderBottom = "1px solid gainsboro">
        <Flex align="center">
          <Box
            display="inline-block"
            w={5}
            h={5}
            bg="gray.300"
            rounded="full"
            mr={2}
          />
          <Text fontSize="sm" color="gray.500">
          <IconButton   icon={<BiLike/>} aria-label="Photo" variant="ghost" colorScheme="teal" size="md" />{likes} 
          </Text>
        </Flex>
        <Text fontSize="sm" color="gray.500">
          {comments} Comments
        </Text>
      </Flex>
      <Flex justifyContent="space-around">
          <IconButton icon={<BiLike/>} aria-label="Photo" variant="ghost" colorScheme="teal" size="md" borderRadius="20px"/>
          <Text ml={-70}>Like</Text>
          <IconButton icon={<BiCommentDetail/>} aria-label="Video" variant="ghost" colorScheme="teal" size="sm" ml={2} />
          <Text ml={-70}>Comment</Text>
          <IconButton icon={<BiRepost/>} aria-label="Job" variant="ghost" colorScheme="teal" size="sm" ml={2} />
          <Text ml={-70}>Repost</Text>
          <IconButton icon={<BsSend />} aria-label="Write Article" variant="ghost" colorScheme="teal" size="sm" ml={2} />
          <Text ml={-70}>Send</Text>
        </Flex>
      {/* <Text fontSize="sm" color="gray.500" mt={2}>
        {date}
      </Text> */}
    </Box>
       /*
      <Flex justify="space-between" align="center">
        <Text fontSize="sm" color="gray.500">{date}</Text>
        <Text fontSize="sm" color="gray.500">
          {likes} Likes
        </Text>
      </Flex> */
    // </Box>
  );
}


export default LinkedInPostCard4;