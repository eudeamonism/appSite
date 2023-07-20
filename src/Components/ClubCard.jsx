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
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";

import { AiFillApple } from "react-icons/ai";

const ClubCard = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  return (
    <VStack
      borderRadius="16"
      border="1px"
      borderColor="gray.100"
      pt={isSmallerThan850 ? "4px" : "14px"}
      pr="2"
      pl="2"
      maxW={isSmallerThan850 ? "350px" : "425px"}
      height={isSmallerThan850 ? "450px" : "425px"}
      mt="2"
    >
      <HStack>
        <Image boxSize="150" objectFit="cover" src="/images/appLogoVersion3.jpg" alt="FCAC Logo" />
        <Stack>
          <Text fontSize="5xl" fontFamily="Bree Serif, serif">
            F.C.A.C.
          </Text>
          <Text fontSize="xl" fontFamily="Bree Serif, serif" mt="-5">
            For Club And Country
          </Text>
          <Text fontSize="sm">Free | Offers In-App Purchases</Text>
        </Stack>
      </HStack>
      <Divider />

      <Text p="2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem! Adipisci recusandae
        atque, culpa consequatur necessitatibus odit illo in enim, at optio autem, velit vero
        repellendus fugit? Soluta, at dignissimos.
      </Text>
      <Divider />
      <Spacer />
      <HStack mb="4">
        <Link
          as={ReactLink}
          to="https://apps.apple.com/us/app/candy-crush-saga/id553834731"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Box borderRadius="8" border="1px" borderColor="gray" p="1.5" w="160px" h="54px">
            <HStack alignItems="center">
              <Icon as={AiFillApple} h="10" w="10" />
              <Box>
                <Text mb="-1" fontSize="xs">
                  Download on the
                </Text>
                <Text fontSize="medium" fontWeight="bold" fontFamily="Helvetica">
                  Apple Store
                </Text>
              </Box>
            </HStack>
          </Box>
        </Link>

        <Link
          as={ReactLink}
          to="https://apps.apple.com/us/app/candy-crush-saga/id553834731"
          style={{ textDecoration: "none" }}
          isExternal
        >
          <Box borderRadius="8" border="1px" borderColor="gray" p="1.5" w="160px" h="54px" px="4">
            <HStack alignItems="center">
              <Icon as={FaGooglePlay} h="8" w="8" />
              <Box>
                <Text mb="-1" fontSize="xs">
                  Android app on
                </Text>
                <HStack>
                  <Text fontSize="medium" fontWeight="medium" fontFamily="Georgia">
                    Google
                  </Text>
                  <Text ml="-1" fontSize="sm" fontWeight="light">
                    play
                  </Text>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </Link>
      </HStack>
    </VStack>
  );
};

export default ClubCard;
