import { Text, VStack, Image, useMediaQuery, useColorModeValue, Box } from "@chakra-ui/react";

const ConstructionCard = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });
  const innerBoxStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    boxSize: "full",
    color: "white",
    textShadow: "0 0 20px black",
    fontSize: "18px",
  };

  const outerBoxStyles = {
    boxSize: "350px",
    p: "10",
    background: "url(/images/constructionPhotoFinal.jpg) center/cover no-repeat",
  };

  return (
    <VStack
      borderRadius="16"
      border="1px"
      borderColor="gray.300"
      pt="4"
      pb="9"
      pr="2"
      height="425px"
      pl="2"
      mt="10"
      bg={useColorModeValue("white", "blue.900")}
    >
      <Text fontSize="xl">Under Construction</Text>

      <Box sx={outerBoxStyles}>
        <Box sx={innerBoxStyles} backdropFilter="auto" backdropContrast="30%">
          We need your help to add more teams and matches! And yes, you will get the credit.
        </Box>
      </Box>
    </VStack>
  );
};

export default ConstructionCard;
