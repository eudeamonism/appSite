import { Link, Flex, Text, Spacer, Box, useColorModeValue, Icon, HStack } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ColorModeSwitcher } from "../Components/ColorModeSwitcher";
import { FaAppStoreIos, FaAndroid } from "react-icons/fa";

const NavBar = () => {
  const links = [
    { linkName: "sign-up", path: "/signup" },
    { linkName: "login", path: "/login" },
  ];

  const NavLink = ({ path, children }) => (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      rounded="md"
      _hover={{ textDecoration: "none", bg: "green" }}
    >
      {children}
    </Link>
  );
  return (
    <Box
      h="16"
      alignItems="center"
      justifyContent="space-between"
      bg={useColorModeValue("gray.100", "gray.900")}
      px="4"
    >
      <Flex h="16" alignItems="center" gap="4">
        <Text>Login</Text>
        <Text>Sign up</Text>
        <Spacer />
        <ColorModeSwitcher />
      </Flex>
    </Box>
  );
};

export default NavBar;

