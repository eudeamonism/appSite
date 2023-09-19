import { Container, Flex, VStack, Text, useMediaQuery } from "@chakra-ui/react";
import SmallForm from "../Components/SmallForm";

const Login = () => {
  const [isSmallerThan390] = useMediaQuery("(width < 400px)", {
    ssr: true,
    fallback: "false",
  });

  return (
    <VStack>
      <Text>Hello!</Text>
      <SmallForm />
    </VStack>
  );
};

export default Login;
