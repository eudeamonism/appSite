import {
  Box,
  Text,
  Link,
  VStack,
  HStack,
  Stack,
  Center,
  Image,
  Flex,
  Icon,
  Spacer,
  Divider,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { FaAppStoreIos, FaAndroid } from "react-icons/fa";
const LandingPage = () => {
  return (
    <Center>
      <HStack mt="4">
        <VStack
          width="400px"
          height="600px"
          borderRadius="16"
          border="1px"
          borderColor="gray.100"
          pt="4"
        >
          <HStack>
            <Image
              boxSize="150"
              objectFit="cover"
              src="/images/appLogoVersion3.jpg"
              alt="FCAC Logo"
            />
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

          <Text ml="2" pr="2" pl="2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, rem! Adipisci recusandae
            atque, culpa consequatur necessitatibus odit illo in enim, at optio autem, velit vero
            repellendus fugit? Soluta, at dignissimos.
          </Text>
          <Divider />

          <VStack mb="2">
            <Text fontSize="xl">Under Construction</Text>
            <Image boxSize="180px" objectFit="cover" src="/images/constructionPhotoFinal.jpg" />
          </VStack>
          <HStack>
            <Link
              as={ReactLink}
              to="https://apps.apple.com/us/app/candy-crush-saga/id553834731"
              style={{ textDecoration: "none" }}
              isExternal
            >
              <Flex>
                <Image src="https://www.flaticon.com/free-icons/ios"/>
                <Text alignItems="center">Apple Store</Text>
              </Flex>
            </Link>
            <Link
              as={ReactLink}
              to="https://apps.apple.com/us/app/candy-crush-saga/id553834731"
              style={{ textDecoration: "none" }}
              isExternal
            >
              <Flex>
                <Icon as={FaAndroid} h="6" w="6" mr="2" />
                <Text alignItems="center">Android</Text>
              </Flex>
            </Link>
          </HStack>
        </VStack>
       {/*  <Box width="500px" height="600px" bg="orange.200"></Box> */}
      </HStack>
    </Center>
  );
};

export default LandingPage;

{/* <a href="https://www.flaticon.com/free-icons/ios" title="ios icons">Ios icons created by Freepik - Flaticon</a> */}