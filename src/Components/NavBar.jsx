import {
  Link,
  Flex,
  Text,
  Spacer,
  Box,
  useColorModeValue,
  Icon,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ColorModeSwitcher } from "../Components/ColorModeSwitcher";
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  const [isSmallerThan380] = useMediaQuery("(min-width: 380px)", {
    ssr: true,
    fallback: "false",
  });

  const links = [
    { linkName: "Home", path: "/" },
    { linkName: "Signup", path: "/signup" },
    { linkName: "Login", path: "/login" },
    { linkName: "About Us", path: "/aboutus" },
    { linkName: "Privacy", path: "/privacy" },
  ];

  const NavLink = ({ path, children }) => (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      rounded="md"
      _hover={{ textDecoration: "none", bg: "rgba(132, 232, 125, 0.2)" }}
      fontSize={{base: 'md', lg: 'xl'}}
    >
      {children}
    </Link>
  );
  return (
    <Flex
      h="16"
      alignItems="center"
      justifyContent="space-between"
      bg={useColorModeValue("rgba(0,0,0,.05)", "gray.900")}
      px="4"
    >
      <HStack as="nav" spacing={4}>
        {links.map((link) => (
          <NavLink key={link.linkName} path={link.path}>
            {link.linkName}
          </NavLink>
        ))}
      </HStack>
      <ColorModeSwitcher />
    </Flex>
  );
};

export default NavBar;
