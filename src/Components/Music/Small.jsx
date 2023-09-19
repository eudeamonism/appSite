import { Flex, Text, useColorModeValue, VStack, Link } from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

const Small = () => {
  return (
    <Flex width="390px" backgroundImage="/images/crowd.jpg">
      <VStack width="390px" pt="20px" mb="25px" height="900px">
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
          <Text as="ins" fontSize="17px">
            Music Credits
          </Text>
          <Text mt="2" mb="4">
            All music is licensed for use in the application. Please visit and appreciate the
            artists.
          </Text>
          <Text fontSize="16px">Opening Credits Theme</Text>
          <Link
            as={ReactLink}
            to="https://www.youtube.com/watch?v=EG6878z99Js"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Flex gap="2">
              <Text fontStyle="oblique">All I Can Do</Text>
              <Text fontWeight="bold">Moments</Text>
              
            </Flex>
          </Link>
          <Text fontSize="16px" mt="25px">
            Puzzle Beats
          </Text>
          <Link
            as={ReactLink}
            to="https://www.youtube.com/watch?v=QGtOVAdcCqM"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Flex gap="2" fontSize="sm">
              <Text fontStyle="oblique">Deshacer</Text>
              <Text fontWeight="bold">Azteca X</Text>
              
            </Flex>
          </Link>
          <Link
            as={ReactLink}
            to="https://www.youtube.com/watch?v=m2iQrEDNHMA"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Flex gap="2" fontSize="sm">
              <Text fontStyle="oblique">Teclas</Text>
              <Text fontWeight="bold">Azteca X</Text>
              
            </Flex>
          </Link>
          <Link
            as={ReactLink}
            to="https://www.youtube.com/watch?v=oikwHVYlArg"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Flex gap="2" fontSize="sm">
              <Text fontStyle="oblique">Outliers</Text>
              <Text fontWeight="bold">Falls</Text>
              
            </Flex>
          </Link>
          <Link
            as={ReactLink}
            to="https://www.youtube.com/watch?v=rNX19h8-xbs"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Flex gap="2" fontSize="sm">
              <Text fontStyle="oblique">Things Stranger Than</Text>
              <Text fontWeight="bold">Falls</Text>
              
            </Flex>
          </Link>
          <Link
            as={ReactLink}
            to="https://www.youtube.com/watch?v=kssjraEwGBE"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Flex gap="2" fontSize="sm">
              <Text fontStyle="oblique">Humble Beginnings</Text>
              <Text fontWeight="bold">Ghost Beatz</Text>
              
            </Flex>
          </Link>
          <Link
            as={ReactLink}
            to="https://www.youtube.com/watch?v=bollUy3rGcY"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Flex gap="2" fontSize="sm">
              <Text fontStyle="oblique">Afta Skewl</Text>
              <Text fontWeight="bold">Nu Alkemi$t</Text>
             
            </Flex>
          </Link>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Small;
