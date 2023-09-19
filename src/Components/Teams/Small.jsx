import { Flex, Text, useColorModeValue, VStack, Link } from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

const Small = () => {
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
    boxSize: "300px",
    p: "10",
    background: "url(/images/constructionPhotoFinal.jpg) center/cover no-repeat",
  };
  return (
    <Flex width="390px" backgroundImage="/images/field2.jpg">
      <VStack width="390px" pt="20px" mb="25px">
        <Flex
          width="350px"
          bg={useColorModeValue("white", "blue.900")}
          p="4"
          borderRadius="10px"
          direction="column"
          gap="2"
          border="1px"
          borderColor="gray.300"
        >
          <Text as="ins">Current Club</Text>
          <Text fontSize="sm" mb="4px">
            Barcelona, Bayern Munich, Chelsea, Juventus, Liverpool, Manchester United, Manchester
            City, Newcastle United, Paris Saint-Germain, Real Madrid, Tottenham Hotspur
          </Text>
          <Text as="ins">Current Countries</Text>
          <Text fontSize="sm">
            Argentina, Brazil, England, France, Korea Republic, Italy, Spain, United States (Men),
            United States (Women)
          </Text>
        </Flex>
        <Flex
          width="350px"
          bg={useColorModeValue("white", "blue.900")}
          p="4"
          borderRadius="10px"
          direction="column"
          gap="2"
          border="1px"
          borderColor="gray.300"
        >
          <Text fontSize="sm">
            If you are a fan and would like to contribute your team’s memorable matches to “For Club
            and Country” please create a login and join the discord. Would be excited to see your
            content added to the app so your fellow supporters can enjoy them.
          </Text>
          <Link fontSize="md" as={ReactLink} to="/signup" style={{ textDecoration: "none" }}>
            <Text as="ins">Sign Up</Text>
          </Link>
          <Link
            fontSize="md"
            as={ReactLink}
            to="https://discord.gg/RAYTr6BA"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Text as="ins">Discord Link</Text>
          </Link>
        </Flex>
        <Flex
          width="350px"
          bg={useColorModeValue("white", "blue.900")}
          p="4"
          borderRadius="10px"
          direction="column"
          gap="2"
          border="1px"
          borderColor="gray.300"
        >
          <VStack>
            <Text fontSize="xl">Under Construction</Text>
            <Flex sx={outerBoxStyles}>
              <Flex sx={innerBoxStyles} backdropFilter="auto" backdropContrast="30%">
                We need your help to add more teams and matches! And yes, you will get the credit.
              </Flex>
            </Flex>
          </VStack>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Small;
