
import { ChakraProvider, Box, Flex, Spacer, Link, Avatar, IconButton, Image, Text ,TagLabel, Tag, HStack, TagCloseButton } from '@chakra-ui/react';
import { HiHome, HiOutlineHeart, HiOutlineSearch,HiOutlineChatAlt,  HiInformationCircle, HiOutlineMail, HiOutlineBell, } from 'react-icons/hi';
import CreatePostCard from './Components/CreatePostCard';
import LinkedInPostCard from './Components/LinkedInPostCard';
import LinkedInPostCard2 from './Components/LinkedInPostCard2';
import LinkedInPostCard3 from './Components/LinkedInPost3Card';
import LinkedInPostCard4 from './Components/LinkedInPostCard4';
function App() {
  return (
    <>
  <div style={{position:"fixed", width: "100%", marginTop: "-119px"}}>
    <ChakraProvider position= 'fixed' 
    width= '100%'>
      <Box bg="teal" p={4} >
        <Flex  alignItems="center" justify="center" ml={150} mr={150}>
          <Box p="2">
          <Image src="https://cdn.dribbble.com/users/2592071/screenshots/7327591/logo-artboard_2_4x.png" width={20}/>
            {/* <Link href="#">Logo</Link> */}
          </Box>
          <Spacer />
          <Flex justify="space-between" width={550} color={'white'}>
          <Link href="#"><HiHome size={24} /></Link>
            <Link href="#"><HiOutlineSearch size={24} /></Link>
            <Link href="#"><HiOutlineChatAlt size={24} /></Link>
            <Link href="#"><HiOutlineHeart size={24} /></Link>
            <Link href="#"><HiInformationCircle size={24} /></Link>
            <Link href="#"><HiOutlineMail size={24} /></Link>
          </Flex>
          <Spacer />
          <Flex>
            <IconButton icon={<HiOutlineBell />} colorScheme="whiteAlpha" ml={2} />
            <Avatar src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/04/28/09/normal-people-0.jpg?quality=75&width=1200&auto=webp" borderRadius="50%" size="sm" ml={4} mt={1}/>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
    </div>
    <div style={{marginTop: "100px"}}>
    <CreatePostCard/>
    </div>
    <Box p={4} borderWidth="1px"  boxShadow="md" width="250px" height="350px" margin="15px" position="fixed" marginTop= "-159px"
    marginLeft ="100px"
    borderRadius= "7px">
          {/* Left Side Card */}
          <Image src='https://img.people-group.com/images/Leadership/anupam-mittal.jpg' borderRadius="50%" height="100px"marginLeft = "61px"
    marginTop = "67px"/>
          <Text fontWeight="bold" textAlign="center">SharathChandra Josh</Text>
        </Box>
    <LinkedInPostCard
      name="Raj Vikramaditya"
      position="Software Engineer"
      company="ABC Company"
      content="As an educator, I receive numerous messages from professionals and students who want guidance on interview
       preparations and strategies to secure their desired jobs, especially during these highly competitive times 🚀"
      date="June 15, 2023"  
      likes={3000}
      comments={28}
    />
   
    <LinkedInPostCard2
      name="Pooja K"
      position="GlobalResume/CvWriting"
      // company="ABC Company"
      content="𝐑𝐞𝐚𝐜𝐡 𝐮𝐬 𝐟𝐨𝐫 - Resume/CV Writing | LinkedIn Profile Optimization | Cover Letter
       𝐌𝐢𝐥𝐞𝐬𝐭𝐨𝐧𝐞𝐬 𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐝 - 15+ Countries Served | 5000+ Projects Delivered | 100+ Resume Designs"
      date="June 15, 2023"  
      likes={3000}
      comments={28}
    />
    <LinkedInPostCard3
      name="charlotte fair"
      position="SCRUM MASTER RESUME, APPLICANTS TRACKING SYSTEM, "
      // company="ABC Company"
      // content="𝐑𝐞𝐚𝐜𝐡 𝐮𝐬 𝐟𝐨𝐫 - Resume/CV Writing | LinkedIn Profile Optimization | Cover Letter
      //  𝐌𝐢𝐥𝐞𝐬𝐭𝐨𝐧𝐞𝐬 𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐝 - 15+ Countries Served | 5000+ Projects Delivered | 100+ Resume Designs"
      date="June 15, 2023"  
      likes={3000}
      comments={28}
    />
    <LinkedInPostCard4
      name="INDRAJIT ROY"
      position="Looking for Internship opportunities in the field of Electronics and IT"
      // company="ABC Company"
      // content="𝐑𝐞𝐚𝐜𝐡 𝐮𝐬 𝐟𝐨𝐫 - Resume/CV Writing | LinkedIn Profile Optimization | Cover Letter
      //  𝐌𝐢𝐥𝐞𝐬𝐭𝐨𝐧𝐞𝐬 𝐀𝐜𝐡𝐢𝐞𝐯𝐞𝐝 - 15+ Countries Served | 5000+ Projects Delivered | 100+ Resume Designs"
      content="Yes Agree"
      date="June 15, 2023"  
      likes={3000}
      comments={28}
    />
   
    </>
  );
}

export default App;
