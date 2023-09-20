import { forwardRef } from "react";

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
  Tooltip,
  Tag,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";

import { AiFillApple } from "react-icons/ai";

const ClubCard = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  const CustomCard = forwardRef(({ children, ...rest }, ref) => (
    <Box>
      <Tag ref={ref} {...rest} bg="none">
        {children}
      </Tag>
    </Box>
  ));

  return (
    <VStack
      borderRadius="16"
      border="1px"
      borderColor="gray.300"
      pt={isSmallerThan850 ? "4px" : "14px"}
      pr="2"
      pl="2"
      maxW={isSmallerThan850 ? "350px" : "425px"}
      height={isSmallerThan850 ? "450px" : "425px"}
      mt="2"
      bg={useColorModeValue("white", "blue.900")}
    >
      <HStack>
        <Image boxSize="150" objectFit="cover" src="/images/brandImage.png" alt="FCAC Logo" />
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
      <Divider mb="25px"/>

      <HStack mb="4">
        <Tooltip label="Coming Soon!">
          <CustomCard>
            <Link
              as={ReactLink}
              to="/"
              style={{ textDecoration: "none" }}
              isExternal
              _disabled="true"
            >
              <Box
                borderRadius="8"
                border="1px"
                borderColor="gray"
                p="1.5"
                w="160px"
                h="54px"
                _hover={{ color: "gray" }}
                mr="-4"
              >
                <HStack alignItems="center">
                  <Icon as={AiFillApple} h="10" w="10" />
                  <Box>
                    <Text mb="1" fontSize="xs">
                      {isSmallerThan850 ? "Coming soon..." : "Download on the "}
                    </Text>
                    <Text fontSize="medium" fontWeight="bold" fontFamily="Helvetica">
                      Apple Store
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Link>
          </CustomCard>
        </Tooltip>
        <Tooltip label="Coming Soon!">
          <CustomCard>
            <Link as={ReactLink} to="/" style={{ textDecoration: "none" }} isExternal>
              <Box
                borderRadius="8"
                border="1px"
                borderColor="gray"
                p="1.5"
                w="160px"
                h="54px"
                px="4"
                _hover={{ color: "gray" }}
              >
                <HStack alignItems="center">
                  <Icon as={FaGooglePlay} h="8" w="8" mb="-1" />
                  <Box>
                    <Text mb="1" fontSize="xs">
                      {isSmallerThan850 ? "Coming soon..." : "Download on"}
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
          </CustomCard>
        </Tooltip>
      </HStack>
      <Divider mt="10px"/>

      <Text p="2" mt="-5px">
        Create an account and submit questions and answers for your favorite club. Subject to review
        by admin before loaded in downloadable application.
      </Text>
    </VStack>
  );
};

export default ClubCard;

//NOTES: transform: "scale(.8)"
