import { useState } from "react";
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

  const [disc, setDisc] = useState(false);
  const discordLink = "https://discord.gg/FDbekJXN44";

  const clipboardHandler = async () => {
    try {
      await navigator.clipboard.writeText(discordLink);
      setDisc(true);
      alert("Link copied to clipboard! Click again to travel to our Discord server!");
    } catch (error) {
      console.log(error);
    }
  };

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
              <Text as="ins">Current Clubs</Text>
              <Text mt="2" mb="4">
                Ajax, Barcelona, Bayern Munich, Boca Juniors, Borussia Dortumnd, Chelsea, Juventus,
                Liverpool, Manchester City, Manchester United, Newcastle United, Paris
                Saint-Germain, Real Madrid, Tottenham Hotspur
              </Text>
              <Text as="ins">Current Countries</Text>
              <Text mt="2">
                Argentina, Brazil, England, France, Germany, Italy, Korea Republic, Nigeria, Spain,
                United States (Men), United States (Women)
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
                If you are a fan and would like to contribute your team's memorable matches to "For
                Club and Country," please email us at admin@forclubandcountry.app. We would be
                excited to see your content added to the app so your fellow supporters can enjoy
                more puzzles.
              </Text>
              <Flex mt="2" direction="column">
                <Link
                  onClick={clipboardHandler}
                  href={disc === true ? discordLink : null}
                  style={{ textDecoration: "none" }}
                  isExternal
                >
                  <Text as="ins">Connect to Discord</Text>
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
