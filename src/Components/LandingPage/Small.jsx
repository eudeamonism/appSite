import { Box, Text, Image, Flex, useMediaQuery, useColorModeValue, VStack } from "@chakra-ui/react";
import ClubCard from "../ClubCard";

const Small = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });
  return (
    <Box
      bgImage={"url(/images/field3.jpg) "}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      p="25px"
    >
      <VStack>
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
            For Club and Country is intense trivia for fans of football (or soccer if you prefer).
            Pick your favorite club or national team and try to identify their most memorable
            matches before time runs out. If you are a passionate supporter who enjoys a pub quiz
            style challenge, please have a go.
          </Text>
        </Box>
        <ClubCard />

        <Box
          borderRadius="16"
          border="1px"
          borderColor="gray.300"
          p="2"
          mt="2"
          bg={useColorModeValue("white", "blue.900")}
          w="350px"
          h="150px"
        >
          @ForClubandCountry
        </Box>
      </VStack>
    </Box>
  );
};

export default Small;
