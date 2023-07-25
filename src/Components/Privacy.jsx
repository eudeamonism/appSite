import {
  Text,
  useMediaQuery,
  VStack,
  HStack,
  Center,
  Flex,
  Link,
  UnorderedList,
  ListItem,
  Container,
  useColorModeValue
} from "@chakra-ui/react";
import {
  privPolicy,
  InfoCollectUse,
  LogDat,
  Kookies,
  Sekurity,
  LinksToOtherZites,
  ChildPrivy,
  ChangesPrivacy,
  Contacty,
} from "../Data/PrivacyPolicy";

const Privacy = () => {
  const [isLargerThan400] = useMediaQuery("(max-width: 400px)", {
    ssr: true,
    fallback: "false",
  });
  return (
    <Container m={isLargerThan400 ? "4px" : null} maxWidth={isLargerThan400 ? "390px" : "800px"}>
      <Flex mb="2" direction="column">
        <Flex mb="2" direction="column">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Privacy Policy</Text>
          <Text>{privPolicy}</Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Information Collection and Use</Text>
          <Text>{InfoCollectUse} </Text>
          <Link href="https://www.google.com/policies/privacy/" isExternal>
            - Google Play Services
          </Link>
        </Flex>
        <Flex mb="2" direction="column">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Log Data</Text>
          <Text>{LogDat} </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Cookies</Text>
          <Text>{Kookies} </Text>
        </Flex>
        <Flex mb="2" direction="column">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Service Providers</Text>
          <Text>
            We may employ third-party companies and individuals due to the following reasons:
          </Text>
          <UnorderedList>
            <ListItem>To facilitate our Service;</ListItem>
            <ListItem>To provide the Service on our behalf;</ListItem>
            <ListItem>To perform Service-related services; or</ListItem>
            <ListItem>To assist us in analyzing how our Service is used.</ListItem>
          </UnorderedList>
          <Text>
            We want to inform users of this Service that these third parties have access to their
            Personal Information. The reason is to perform the tasks assigned to them on our behalf.
            However, they are obligated not to disclose or use the information for any other
            purpose.
          </Text>
        </Flex>
        <Flex direction="column" mb="2">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Security</Text>
          <Text>{Sekurity} </Text>
        </Flex>
        <Flex direction="column" mb="2">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Links to Other Sites</Text>
          <Text>{LinksToOtherZites} </Text>
        </Flex>
        <Flex direction="column" mb="2">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Children's Privacy</Text>
          <Text>{ChildPrivy} </Text>
        </Flex>
        <Flex direction="column" mb="2">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Changes to This Privacy Policy</Text>
          <Text>{ChangesPrivacy} </Text>
        </Flex>
        <Flex direction="column" mb="2">
          <Text  fontWeight="md" fontSize="larger" color={useColorModeValue("orange.500", "blue.200")}>Contact Us</Text>
          <Text>{Contacty} </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Privacy;
