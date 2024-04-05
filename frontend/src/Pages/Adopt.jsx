import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Button,
  ButtonGroup,
  Text,
  Spinner,
  Center,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const Adopt = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterColor, setFilterColor] = useState("");
  const [selectedPet, setSelectedPet] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const petsPerPage = 8;

  // Form Data
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    AadharId: "",
    address: "",
    reason: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchPets();
  }, [page, filterType, filterColor]);

  const fetchPets = async () => {
    try {
      const res = await fetch(`https://petpals-4.onrender.com/pet`);
      const { pets } = await res.json();
      setLoading(false);
      setData(pets);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.error("Error fetching pets:", err);
    }
  };

  const filteredPets = data.filter((pet) => {
    if (filterType && filterType !== "" && pet.type !== filterType)
      return false;
    if (filterColor && filterColor !== "" && pet.color !== filterColor)
      return false;
    if (
      searchInput &&
      !pet.name.toLowerCase().includes(searchInput.toLowerCase())
    )
      return false;
    return true;
  });

  const indexOfLastPet = page * petsPerPage;
  const indexOfFirstPet = indexOfLastPet - petsPerPage;
  const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    setPage(1);
  };

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
    setPage(1);
  };

  const handleFilterColorChange = (event) => {
    setFilterColor(event.target.value);
    setPage(1);
  };

  const handlePagination = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleFormSubmit = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const { name, contact, AadharId, address, reason } = formData;
    try {
      const petId = selectedPet._id;
      const response = await fetch(
        `https://petpals-4.onrender.com/application/${petId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, 
          },
          body: JSON.stringify({
            name,
            contact,
            AadharId,
            address,
            reason,
          }),
        }
      );
        console.log(name, contact, AadharId, address, reason);
   
      const responseData = await response.json();
      if(responseData.ok){
        toast({
          title: responseData.msg,
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
      }
      else{
        toast({
          title: responseData.msg,
          status: 'error',
          duration: 2000,
          isClosable: true,
        });
      }
      console.log(responseData);
      toast({
        title: responseData.msg,
        status: 'error',
        duration: 2000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      toast.error('Please login');
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again later.");
    }
  };
  

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: "5rem",
          gap: "10px",
          marginTop: "10px",
          justifyContent:"center",
          marginTop:"50px",
        }}
      >
        <input
          type="text"
          placeholder="Search by name"
          value={searchInput}
          onChange={handleSearchInputChange}
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            padding: "5px",
            marginRight: "10px",
            borderColor: "grey",
          }}
        />

        <select
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            padding: "5px",
            marginRight: "10px",
            borderColor: "grey",
          }}
          value={filterType}
          onChange={handleFilterTypeChange}
        >
          <option value="">All Types</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>

        <select
          style={{
            backgroundColor: "#f5f5f5",
            borderRadius: "5px",
            padding: "5px",
            marginRight: "10px",
            borderColor: "grey",
          }}
          value={filterColor}
          onChange={handleFilterColorChange}
        >
          <option value="">All Colors</option>
          <option value="brown">Brown</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="gray">Gray</option>
          <option value="cream">Cream</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <Grid
          textAlign={"left"}
          color={"#171616"}
          w="85%"
          m="auto"
          gap={{ base: "20px", md: "30px", lg: "40px", xl: "50px" }}
          justifyContent={"center"}
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(3,1fr)",
          }}
        >
          {currentPets.map((pet) => (
            <Box
              key={pet._id}
              boxShadow="grey 0px 8px 24px"
              display={"flex"}
              flexDirection={"column"}
              p={"20px"}
              _hover={{
                transform: "scale(1.02)",
                transition: "transform 0.4s",
              }}
              style={{ borderRadius: "10px" }}
              gap="10px"
            >
              <Image
                src={pet.url}
                m={"auto"}
                style={{
                  borderRadius: "10px",
                  width: "100%",
                  height: "230px",
                }}
              />
              <Flex flexDirection={"column"} gap="10px">
                <Heading
                  as="h6"
                  fontSize="20px"
                  textAlign="center"
                  mt="7px"
                  mb="5px"
                >
                  Name: {pet.name}
                </Heading>
                <Text>
                  <strong>Type:</strong> {pet.type}
                </Text>
                <Text>
                  {" "}
                  <strong>Gender:</strong> {pet.gender}
                </Text>
                <Text>
                  <strong>Color: </strong>
                  {pet.color}
                </Text>
                <Text>
                  <strong>Age: </strong>
                  {pet.age}
                </Text>
                <Text>
                  <strong>Description:</strong> {pet.description}
                </Text>
              </Flex>
              <Button m="auto" bgColor="orange" onClick={() => {
                setSelectedPet(pet);
                onOpen();
              }}>
                Adopt Me
              </Button>
            </Box>
          ))}
        </Grid>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Application Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Contact</FormLabel>
                <Input
                  type="text"
                  placeholder="Contact"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Aadhar ID</FormLabel>
                <Input
                  type="text"
                  placeholder="Aadhar ID"
                  name="AadharId"
                  value={formData.AadharId}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Reason</FormLabel>
                <Input
                  type="text"
                  placeholder="Reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" onClick={handleFormSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Flex m="auto" width="28%" mb="20px">
        <ButtonGroup variant="outline" spacing="7">
          <Button
            bgColor="yellow"
            onClick={() => handlePagination(page - 1)}
            isDisabled={page === 1}
          >
            Previous
          </Button>
          <p>{page}</p>
          <Button
            bgColor="yellow"
            onClick={() => handlePagination(page + 1)}
            isDisabled={currentPets.length < petsPerPage}
          >
            Next
          </Button>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Adopt;
