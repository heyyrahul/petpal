import { Text, IconButton, Divider, SimpleGrid ,Box,Image} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaGooglePlay, FaApple } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/Pet pals_prev_ui.png'
import { Flex } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box
            as="footer"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="2rem"
            // bgGradient="linear(to-r, orange.400, yellow.400)"
            bg={'#FFA161'}
            color="white"
        >
            <SimpleGrid
                as="Flex"
                placeItems="center"
                justifyContent="space-evenly"
                columns={{ base: 1, md: 4, lg: 7 }}
            >
                <Flex direction="row" align="center" mb={4}>
                <Link to="/"> <Image src={logo} alt="Logo" boxSize="50px" mr={4} height="90px" width="80px" /></Link>
                

               
            </Flex>


                

                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="black">
                        Quick Links
                    </Text>
                    <Link to="https://pet-pals-admin.vercel.app/" target='blank' style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Admin Login
                    </Link>
                    <Link to="/About" style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        About
                    </Link>
                    <Link to="/Contact" style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Contact Us
                    </Link>
                   
                </Flex>
                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="black">
                        Policy
                    </Text>
                    <Text  style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Privacy Policy
                    </Text>
                    <Text style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Privacy Notice
                    </Text>
                    <Text style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                    Terms and Conditions
                        
                    </Text>
                    
                </Flex>
                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="black">
                        Partner
                    </Text>
                    <Text  style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Become a Petpal Vet
                    </Text>
                    <Text style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Login as a Vet
                    </Text>
                    <Text style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Store Locator
                    </Text>
                    
                </Flex>

                <Flex direction="column" mr={8}>
                    <Text fontSize="lg" mb={2} fontWeight="bold" color="black">
                        About
                    </Text>
                    <Text style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Feedback
                    </Text>
                    <Text style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Careers
                    </Text>
              
                    <Text style={{ textDecoration: 'none', color: 'black', marginBottom: '0.5rem' }}>
                        Affiliate program
                        Investors
                    </Text>
                 
                </Flex>

              

                <Flex direction="column" align="center" justifyContent='space-betweens'>
                    <Flex direction="column">
                        <Text fontSize="lg" mb={2} fontWeight="bold" color="black">
                            Connect with us
                        </Text>
                        <Flex>
                            <IconButton
                                as="a"
                                href="https://www.facebook.com/"
                                target="_blank"
                                aria-label="Facebook"
                                icon={<FaFacebook />}
                                mr={2}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                            <IconButton
                                as="a"
                                href="https://twitter.com/"
                                target="_blank"
                                aria-label="Twitter"
                                icon={<FaTwitter />}
                                mr={2}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                            <IconButton
                                as="a"
                                href="https://www.instagram.com/"
                                target="_blank"
                                aria-label="Instagram"
                                icon={<FaInstagram />}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                        </Flex>
                    </Flex>

                    <Flex direction="column" ml={8}>
                        <Text fontSize="lg" mb={2} fontWeight="bold" color="black">
                            Download our App
                        </Text>
                        <Flex>
                            <IconButton
                                as="a"
                                href="https://play.google.com/store/apps/"
                                target="_blank"
                                aria-label="Google Play"
                                icon={<FaGooglePlay />}
                                mr={2}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                            <IconButton
                                as="a"
                                href="https://apps.apple.com/us/app/"
                                target="_blank"
                                aria-label="App Store"
                                icon={<FaApple />}
                                color="#61dafb"
                                bg="white"
                                _hover={{ color: '#1a8cf4' }}
                            />
                        </Flex>
                    </Flex>
                </Flex>
            </SimpleGrid>

            <Divider my={4} w="100%" borderColor="white" />

            <Flex direction="row" textAlign="center" align="center" justify="center" mx="auto" width="100%">
                <Text fontSize="sm" color="black" mt={2} width="100%">
                © 2024 Petpal. All Rights Reserved
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
