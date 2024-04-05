import { Box, Image, Heading, Text, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <>
      <Heading textAlign="center" fontSize="55px" mt="40px">
        {" "}
        About Us
      </Heading>
      <Text w="55%" margin="auto" textAlign="center" mt="16px" mb="50px">
        Petpals are proud to be the No.1 award-winning multi-service pet care
        company in the UK. We were founded in 2001 and since then have grown to
        cover over 150 areas nationwide. We pride ourselves on delivering the
        highest standards of ethical pet care in the UK.
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={10} w="90%" m="auto">
        <GridItem w="100%">
          <Image
            src="https://i0.wp.com/ipapharma.org/wp-content/uploads/2020/08/Regulations-Guidelines.jpg?fit=300%2C300&ssl=1"
            alt="Guidelines"
          />
          <Heading fontSize="25px">Guidelines and Requirements</Heading>
          <Text
            margin="auto"
            pt="20px"
            pb="10px"
            fontSize="18px"
            textAlign="justify"
          >
            Provide clear and transparent guidelines outlining the requirements
            for potential adopters. This includes information on eligibility
            criteria, adoption fees, required documentation, and any other
            relevant details. Clarity in these guidelines helps manage
            expectations process upfront.
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Image src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/06/26193755/Application-to-the-Principal.png" />
          <Heading fontSize="25px" mt="15%">
            Application Review Process
          </Heading>
          <Text
            margin="auto"
            pt="20px"
            pb="10px"
            fontSize="18px"
            textAlign="justify"
          >
            Implement a thorough review process for adoption applications to
            ensure that dogs are placed in suitable homes. This may involve
            assessing factors such as the adopters living situation, and their
            ability to provide proper care and attention to a dog. A
            comprehensive review process helps ensure the well-being and safety
            of the animals.
          </Text>
        </GridItem>

        <GridItem w="100%">
          <Image src="https://fastercapital.co/i/Pet-adoption--Finding-Forever-Homes--Classified-Boards-for-Pet-Adoption--Types-of-Pets-Available-for-Adoption-on-Classified-Boards.webp" />
          <Heading fontSize="25px" mt="15%">
            Personalized Matching
          </Heading>
          <Text
            margin="auto"
            pt="20px"
            pb="10px"
            fontSize="18px"
            textAlign="justify"
          >
            Focus on personalized matching between dogs and potential adopters.
            Take into account factors such as the adopters and the dogs
            temperament and needs. By matching dogs with compatible adopters,
            you increase the likelihood of successful adoptions and reduce the
            risk of dogs being returned to the shelter or rescue organization.
          </Text>
        </GridItem>
      </Grid>
      <br />
      <br />
      <Box w="70%" margin="auto" marginTop="30px" marginBottom="50px">
        <Heading textAlign="center" fontSize="29px" mt="40px">
          {" "}
          OUR MISSION
        </Heading>
        <Text textAlign="center" marginTop="20px">
          To use Internet technology and the resources it can generate to:
        </Text>
        <br />
        <Text textAlign="center">
          Increase public awareness of the availability of high-quality
          adoptable pets Increase the overall effectiveness of pet adoption
          programs across North America to the extent that the euthanasia of
          adoptable pets is eliminated Elevate the status of pets to that of
          family member
        </Text>
        <br />
        <Text textAlign="center">
          From the comfort of their personal computers, pet lovers can search
          for a pet that best matches their needs. They can then reference a
          shelter’s web page and discover what services it offers. Petfinder
          also includes discussion forums, a pet-care resource directory and a
          library of free pet-care articles to help keep pets in their homes.
        </Text>
      </Box>
    </>
  );
};

export default About;
