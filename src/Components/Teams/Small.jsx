import { useState } from "react";
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
          <Text as="ins">Current Clubs</Text>
          <Text fontSize="sm" mb="4px">
            Ajax, Barcelona, Bayern Munich, Boca Juniors, Borussia Dortumnd, Chelsea, Juventus,
            Liverpool, Manchester City, Manchester United, Newcastle United, Paris Saint-Germain,
            Real Madrid, Tottenham Hotspur
          </Text>
          <Text as="ins">Current Countries</Text>
          <Text fontSize="sm">
            Argentina, Brazil, England, France, Germany, Italy, Korea Republic, Nigeria, Spain,
            United States (Men), United States (Women)
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
            If you are a fan and would like to contribute your team's memorable matches to "For Club
            and Country," please email us at admin@forclubandcountry.app. We would be excited to see
            your content added to the app so your fellow supporters can enjoy more puzzles.
          </Text>

          <Link
            fontSize="md"
            href={disc === true ? discordLink : null}
            style={{ textDecoration: "none" }}
            isExternal
            onClick={clipboardHandler}
          >
            <Text as="ins">Connect to Discord</Text>
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
