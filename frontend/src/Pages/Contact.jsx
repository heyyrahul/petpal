import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Flex,
  Link,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useState } from "react";
import "./contact.css";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);

  // // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);
      //  alert("Successful");

      toast.success("Form Submitted..We will get back to you soon.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Bounce,
      });
    } catch (e) {
      // console.error(e);
      // Display error alert
      // toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    <>
      <Box w="100%">
        <Box
          bgImage="url('https://img.freepik.com/free-photo/group-portrait-five-adorable-puppies_53876-64839.jpg?size=626&ext=jpg&ga=GA1.1.1389500355.1706119030&semt=ais')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          filter="blur(1px)"
          zIndex="-1000"
          bgOpacity={0.5} // Set the opacity value here (0.5 for 50% opacity)
          // h="100vh" // Set the height of the box
          w="100%"
          h="370px"
        >
           
          <VStack
            spacing={4}
            alignItems="center"
            justifyContent="center"
            w="90%"
            margin="auto"
            alignContent="center"
            paddingTop="50px"
          >
            <Heading
              fontSize="47px"
              fontFamily="Lato, sans-serif"
              color="white"
              letterSpacing="1.2px"
              textShadow="0px 4px 4px rgb(95, 87, 87)"
              textAlign="left"
            >
              <b style={{zIndex:"100"}}>Contact</b>
              <br />
            </Heading>
            <Text
              color="white"
              fontFamily="Lato, sans-serif"
              fontSize="16px"
              fontWeight="400"
              w="40%"
            >
              Petpals can be contacted directly at various locations around the
              country. Alternatively, complete the enquiry form below and we
              will make sure it gets to your nearest Petpals team:
            </Text>
          </VStack>
        </Box>

        <div className="ContactForm">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="contactForm">
                  <form
                    id="contact-form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    {/* Row 1 of form */}
                    <div className="row formRow">
                      <div className="col-6">
                        <input
                          type="text"
                          name="name"
                          {...register("name", {
                            required: {
                              value: true,
                              message: "Please enter your name",
                            },
                            maxLength: {
                              value: 30,
                              message: "Please use 30 characters or less",
                            },
                          })}
                          className="form-control formInput contact-name"
                          placeholder="Name"
                        ></input>
                        <br />
                        {errors.name && (
                          <span className="errorMessage">
                            {errors.name.message}
                          </span>
                        )}
                      </div>
                      <div className="col-6">
                        <input
                          type="email"
                          name="email"
                          {...register("email", {
                            required: true,
                            pattern:
                              /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                          })}
                          className="form-control formInput contact-mail"
                          placeholder="Email address"
                        ></input>
                        <br />
                        {errors.email && (
                          <span className="errorMessage">
                            Please enter a valid email address
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className="row1 formRow1">
                      <div className="col">
                        <input
                          type="text"
                          name="subject"
                          {...register("subject", {
                            required: {
                              value: true,
                              message: "Please enter a subject",
                            },
                            maxLength: {
                              value: 75,
                              message: "Subject cannot exceed 75 characters",
                            },
                          })}
                          className="form-control formInput sub"
                          placeholder="Title"
                        ></input>
                        <br />
                        {errors.subject && (
                          <span className="errorMessage">
                            {errors.subject.message}
                          </span>
                        )}
                      </div>
                    </div>
                    {/* Row 3 of form */}
                    <div className="row1 formRow1">
                      <div className="col">
                        <textarea
                          rows={3}
                          name="message"
                          className="form-control formInput message"
                          placeholder="Message"
                        ></textarea>
                        <br />
                        {errors.message && (
                          <span className="errorMessage">
                            Please enter a message
                          </span>
                        )}
                      </div>
                    </div>

                    <button
                      className="submit-btn btn btn-primary"
                      disabled={disabled}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>

        {/* <Box as="footer" py={20} fontSize={12} w="100%">
          <Container maxW="container.xl" w="80%">
            <Flex
              direction={{ base: "column", sm: "row" }}
              justify="space-between"
              align="center"
            >
              <Box>
                <Flex justify="center" mb={{ base: 4, sm: 0 }}>
                  <Image
                    src="https://www.petpals.com/wp-content/themes/petpals/img/EWIF.jpg?1"
                    mr={10}
                  />
                  <Image src="https://www.petpals.com/wp-content/themes/petpals/img/pif-footer.png" />
                </Flex>
              </Box>
              <Box fontSize="16px" marginLeft="10%" w="220%">
                <Text textAlign={{ base: "center", sm: "center" }} mb={4}>
                  Petpals (UK) Limited | Basepoint | Caxton Close | East Portway
                  | Andover | Hampshire | SP10 3FG | Tel: 01264 326362
                </Text>
                <Text textAlign={{ base: "center", sm: "center" }} mb={4}>
                  General enquiries:{" "}
                  <Link href="mailto:ukoffice@petpals.com">
                    ukoffice@petpals.com
                  </Link>{" "}
                  | New franchise enquiries:{" "}
                  <Link href="mailto:newbusiness@petpals.com">
                    newbusiness@petpals.com
                  </Link>{" "}
                  | <Link href="https://www.petpals.com/terms">privacy</Link> |{" "}
                  <Link href="https://www.petpals.com/terms">cookies</Link>
                </Text>
                <Text textAlign={{ base: "center", sm: "center" }} mb={4}>
                  ©Copyright 2014 Petpals (UK) Limited. Registered in England
                  No. 04198335
                </Text>
                <Flex justify="center">
                  <UnorderedList display="flex" listStyleType="none" p={0}>
                    <ListItem mr="4px">
                      <Link href="https://www.facebook.com/petpalsuk">
                        <Image src="https://www.petpals.com/wp-content/themes/petpals/img/icon-facebook.png" />
                      </Link>
                    </ListItem>
                    <ListItem mr="4px">
                      <Link href="https://twitter.com/petpalsuk">
                        <Image src="https://www.petpals.com/wp-content/themes/petpals/img/icon-twitter.png" />
                      </Link>
                    </ListItem>
                    <ListItem mr="4px">
                      <Link href="https://www.instagram.com/petpals_uk/">
                        <Image src="https://www.petpals.com/wp-content/themes/petpals/img/icon-insta.png" />
                      </Link>
                    </ListItem>
                    <ListItem mr="4px">
                      <Link href="https://www.youtube.com/channel/UCMTiIgqG3kSSSnwVsqxWRRA">
                        <Image src="https://www.petpals.com/wp-content/themes/petpals/img/icon-youtube.png" />
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Flex>
                <Text textAlign={{ base: "center", sm: "center" }}>
                  <Link href="https://www.petpals.com/service/pet-sitting/">
                    Pet Sitting
                  </Link>{" "}
                  |{" "}
                  <Link href="https://www.petpals.com/service/dog-sitting/">
                    Dog Sitting
                  </Link>{" "}
                  |{" "}
                  <Link href="https://www.petpals.com/service/cat-sitting/">
                    Cat Sitting
                  </Link>{" "}
                  |{" "}
                  <Link href="https://www.petpals.com/service/dog-walking/">
                    Dog Walking
                  </Link>{" "}
                  |{" "}
                  <Link href="https://www.petpals.com/service/dog-home-boarding/">
                    Dog Home Boarding
                  </Link>{" "}
                  |{" "}
                  <Link href="https://www.petpals.com/service/dog-home-boarding/">
                    Alternative to Boarding Kennels
                  </Link>{" "}
                  |{" "}
                  <Link href="https://www.petpals.com/testimonials/">
                    Testimonials
                  </Link>
                </Text>
              </Box>
              <Box>
                <Flex justify="center" mt={{ base: 4, sm: 0 }}>
                  <Image
                    src="https://www.petpals.com/wp-content/themes/petpals/img/bfa-member.png?1"
                    ml={10}
                    w="28%"
                  />
                  <Image
                    src="https://www.petpals.com/wp-content/themes/petpals/img/fsb-member.png"
                    w="28%"
                    ml={10}
                  />
                </Flex>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box> */}
      </Box>
    </>
  );
}

export default Contact;
