import {
  Box,
  Text,
  Image,
  Flex,
  useMediaQuery,
  useColorModeValue,
  Center,
  Link,
} from "@chakra-ui/react";
import ConstructionCard from "../ConstructionCard";
import { Link as ReactLink } from "react-router-dom";

const Large = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  const [isLargerThan1000] = useMediaQuery("(width > 1000px)");

  return (
    <Center
      bgImage={"url(/images/field3.jpg) "}
      backgroundRepeat={isLargerThan1000 ? "repeat" : "no-repeat"}
      height="1000px"
    >
      <Flex mt="-300px">
        <Flex p="8" width="550px">
          <Flex direction="column" gap="4">
            <Box
              borderRadius="16"
              border="1px"
              borderColor="gray.300"
              p="3"
              mt="2"
              bg={useColorModeValue("white", "blue.900")}
              fontSize="xl"
            >
              <Text as="ins">Current Club</Text>
              <Text mt="2" mb="4">
                Barcelona, Bayern Munich, Chelsea, Juventus, Liverpool, Manchester United,
                Manchester City, Newcastle United, Paris Saint-Germain, Real Madrid, Tottenham
                Hotspur
              </Text>
              <Text as="ins">Current Countries</Text>
              <Text mt="2">
                Argentina, Brazil, England, France, Korea Republic, Italy, Spain, United States
                (Men), United States (Women)
              </Text>
            </Box>
            <Box
              borderRadius="16"
              border="1px"
              borderColor="gray.300"
              p="3"
              mt="2"
              bg={useColorModeValue("white", "blue.900")}
              fontSize="xl"
            >
              <Text>
                If you are a fan and would like to contribute your team’s memorable matches to “For
                Club and Country” please create a login and join the discord. Would be excited to
                see your content added to the app so your fellow supporters can enjoy them. C
              </Text>
              <Flex mt="2" direction="column">
                <Link as={ReactLink} to="/signup" style={{ textDecoration: "none" }}>
                  <Text as="ins">Sign Up</Text>
                </Link>
                <Link
                  as={ReactLink}
                  to="https://discord.gg/RAYTr6BA"
                  style={{ textDecoration: "none" }}
                  isExternal
                >
                  <Text as="ins">Discord Link</Text>
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Flex>

        <ConstructionCard />
      </Flex>
    </Center>
  );
};

export default Large;
