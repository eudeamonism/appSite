import {
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Stack,
  Image,
  Icon,
  Spacer,
  Divider,
  useMediaQuery,
  Center,
  Flex,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { motion } from "framer-motion";
import { BsDiscord } from "react-icons/bs";

import { AiFillApple } from "react-icons/ai";

const AboutUs = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  return (
    <Center>
      <VStack
        borderRadius="16"
        border="1px"
        borderColor="gray.300"
        pt={isSmallerThan850 ? "4px" : "14px"}
        pr="2"
        pl="2"
        maxW={isSmallerThan850 ? "350px" : "425px"}
        height={isSmallerThan850 ? "525px" : "475px"}
        mt="2"
      >
        <Flex justify="flex-start">
          <Text>Email: admin@forclubandcountry.app</Text>
        </Flex>
        <Divider />

        <Text p="2" fontSize={isSmallerThan850 ? "15px" : "16px"}>
          We are soccer enthusiasts, crazed over soccer trivia. We believe that soccer is more than
          just a sport - it's a passion that can unite people from all over the world. With your
          help, we can add more trivia that showcases key events in soccer that shook the world. We
          are always looking for new and interesting trivia to add to our website. If you have a
          trivia question that you think would be a good fit, please submit it through our contact
          form. We will review all submissions and add the best ones to our website. We hope you
          enjoy our website and that you learn something new about soccer trivia. Thank you for your
          support!
        </Text>
        <Divider />
        <Spacer />
        <HStack mb="4">
          <Link
            as={ReactLink}
            to="https://discord.gg/RAYTr6BA"
            style={{ textDecoration: "none" }}
            isExternal
          >
            <Box
              borderRadius="8"
              border="1px"
              borderColor="gray"
              p="1.5"
              w="160px"
              h="54px"
              _hover={{ transform: "scale(.8)" }}
            >
              <HStack alignItems="center">
                <Icon as={BsDiscord} h="10" w="10" />
                <Box>
                  <Text mb="-1" fontSize="xs">
                    Join us on our
                  </Text>
                  <Text fontSize="medium" fontWeight="bold" fontFamily="Helvetica">
                    Discord
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Link>
        </HStack>
      </VStack>
    </Center>
  );
};

export default AboutUs;
