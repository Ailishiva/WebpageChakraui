import { Box, Flex, Avatar, Text, Image , IconButton ,TagLabel, Tag, HStack, TagCloseButton} from "@chakra-ui/react";
 import {FaGlobeAsia} from 'react-icons/fa'
 import { BiLike, BiCommentDetail, BiRepost} from 'react-icons/bi';
 import {BsSend} from 'react-icons/bs'
 import { Chip } from "@mui/material";
 import DeleteIcon from '@mui/icons-material/Delete';
import { DoneOutline } from "@mui/icons-material";

 

//import { FaBeer } from 'react-icons/fa'
function LinkedInPostCard({ name, position, company, content, date, likes, comments }) {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  return (
    <>
    <Flex>
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
       <Text mb={4}>{content}</Text>
       <Image src="https://media.licdn.com/dms/image/D4D22AQFM4fy_w6Zreg/feedshare-shrink_800/0/1686832466614?e=1689811200&v=beta&t=4JVL5TOvCk6s4WPX6nkSUjbgs1uEpAQH_51XN6qu7Nc"/>
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
    <Box position="fixed" p={4} borderWidth="1px" borderRadius="5px" boxShadow="md" width="300px" height="350px" marginTop="-150px" marginLeft="75rem"
    >
      <Chip label="Chip Filled" />
      <Chip
  label="Clickable Link"
  component="a"
  href="#basic-chip"
  variant="outlined"
  clickable
/>
<Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DoneOutline/>}
      />
<Chip
        label="Custom delete icon"
        onClick={handleClick}
        onDelete={handleDelete}
        deleteIcon={<DeleteIcon />}
        variant="outlined"
      />
 <Chip avatar={<Avatar color="black">M</Avatar>} label="Avatar" />
 <Chip label="Deletable" onDelete={handleDelete} />
<Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
            </Box>
    </Flex>
            </>
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


export default LinkedInPostCard;