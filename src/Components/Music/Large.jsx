import {
  Flex,
  Text,
  useColorModeValue,
  VStack,
  Link,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";

import { Link as ReactLink } from "react-router-dom";

const Large = () => {
  const [isLargerThan1000] = useMediaQuery("(width > 1000px)");
  return (
    <Center
      width="1200"
      bgImage="/images/crowd.jpg"
      backgroundRepeat={isLargerThan1000 ? "repeat" : "no-repeat"}
      height="1000px"
    >
      <Flex
        bg={useColorModeValue("white", "blue.900")}
        border="1px"
        borderColor="gray.300"
        width="600px"
        borderRadius="16"
        mt="-300px"
        direction="column"
        p="4"
      >
        <Text as="ins" fontSize="22px">
          Music Credits
        </Text>
        <Text mt="2" mb="4">
          All music is licensed for use in the application. Please visit and appreciate the artists.
        </Text>
        <Text fontSize="18px">Opening Credits Theme</Text>
        <Link
          as={ReactLink}
          to="https://www.youtube.com/watch?v=EG6878z99Js"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Flex gap="2">
            <Text fontStyle="oblique">All I Can Do</Text>
            <Text fontWeight="bold">Moments</Text>
            <Text as="ins">All I Can Do - YouTube</Text>
          </Flex>
        </Link>
        <Text fontSize="18px" mt="25px">
          Puzzle Beats
        </Text>
        <Link
          as={ReactLink}
          to="https://www.youtube.com/watch?v=QGtOVAdcCqM"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Flex gap="2">
            <Text fontStyle="oblique">Deshacer</Text>
            <Text fontWeight="bold">Azteca X</Text>
            <Text as="ins">Deshacer - YouTube</Text>
          </Flex>
        </Link>
        <Link
          as={ReactLink}
          to="https://www.youtube.com/watch?v=m2iQrEDNHMA"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Flex gap="2">
            <Text fontStyle="oblique">Teclas</Text>
            <Text fontWeight="bold">Azteca X</Text>
            <Text as="ins">Teclas - YouTube</Text>
          </Flex>
        </Link>
        <Link
          as={ReactLink}
          to="https://www.youtube.com/watch?v=oikwHVYlArg"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Flex gap="2">
            <Text fontStyle="oblique">Outliers</Text>
            <Text fontWeight="bold">Falls</Text>
            <Text as="ins">Outliers - YouTube</Text>
          </Flex>
        </Link>
        <Link
          as={ReactLink}
          to="https://www.youtube.com/watch?v=rNX19h8-xbs"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Flex gap="2">
            <Text fontStyle="oblique">Things Stranger Than</Text>
            <Text fontWeight="bold">Falls</Text>
            <Text as="ins">Things Stranger Than - YouTube</Text>
          </Flex>
        </Link>
        <Link
          as={ReactLink}
          to="https://www.youtube.com/watch?v=kssjraEwGBE"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Flex gap="2">
            <Text fontStyle="oblique">Humble Beginnings</Text>
            <Text fontWeight="bold">Ghost Beatz</Text>
            <Text as="ins">Humble Beginnings - YouTube</Text>
          </Flex>
        </Link>
        <Link
          as={ReactLink}
          to="https://www.youtube.com/watch?v=bollUy3rGcY"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Flex gap="2">
            <Text fontStyle="oblique">Afta Skewl</Text>
            <Text fontWeight="bold">Nu Alkemi$t</Text>
            <Text as="ins">Afta Skewl - YouTube</Text>
          </Flex>
        </Link>
      </Flex>
    </Center>
  );
};

export default Large;
