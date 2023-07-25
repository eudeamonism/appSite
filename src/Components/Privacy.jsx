import { Text, useMediaQuery, VStack, HStack, Center, Flex, Link } from "@chakra-ui/react";
import { privPolicy, InfoCollectUse, LogDat } from "../Data/PrivacyPolicy";

const Privacy = () => {
  const [isSmallerThan850] = useMediaQuery("(max-width: 390px)", {
    ssr: true,
    fallback: "false",
  });
  return (
    <Flex direction="column">
      <Flex direction="column">
        <Text color="red">Privacy Policy</Text>
        <Text>{privPolicy}</Text>
      </Flex>
      <Flex direction="column">
        <Text color="red">Information Collection and Use</Text>
        <Text>{InfoCollectUse} </Text>
        <Link href="https://www.google.com/policies/privacy/" isExternal>
          - Google Play Services
        </Link>
      </Flex>
      <Flex direction="column">
        <Text color="red">Log Data</Text>
        <Text>{LogDat} </Text>
      </Flex>
    </Flex>
  );
};

export default Privacy;
