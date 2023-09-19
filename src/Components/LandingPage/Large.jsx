import { Box, Text, Image, Flex, useMediaQuery, useColorModeValue, Center } from "@chakra-ui/react";
import ClubCard from "../ClubCard";

const Large = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });
  return (
    <Box
      bgImage={"url(/images/field3.jpg) "}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      height="1000px"
    >
      <Center>
        <Flex p="8" gap="8">
          <Flex direction="column" gap="6">
            <Box
              borderRadius="16"
              border="1px"
              borderColor="gray.300"
              pt={isSmallerThan850 ? "4px" : "14px"}
              p="3"
              maxW={isSmallerThan850 ? "350px" : "425px"}
              mt="2"
              bg={useColorModeValue("white", "blue.900")}
            >
              <Text>
                For Club and Country is intense trivia for fans of football (or soccer if you
                prefer). Pick your favorite club or national team and try to identify their most
                memorable matches before time runs out. If you are a passionate supporter who enjoys
                a pub quiz style challenge, please have a go.
              </Text>
            </Box>
            <ClubCard />
          </Flex>
          <Box
            borderRadius="16"
            border="1px"
            borderColor="gray.300"
            pt={isSmallerThan850 ? "4px" : "14px"}
            p="2"
            mt="2"
            bg={useColorModeValue("white", "blue.900")}
            w="500px"
          >
            @ForClubandCountry
          </Box>
        </Flex>
      </Center>
    </Box>
  );
};

export default Large;
