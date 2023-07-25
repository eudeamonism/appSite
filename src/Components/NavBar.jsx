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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  ListItem,
  List,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import { Link as ReactLink } from "react-router-dom";
import { ColorModeSwitcher } from "../Components/ColorModeSwitcher";

const NavBar = () => {
  const [isLargerThan400] = useMediaQuery("(max-width: 400px)", {
    ssr: true,
    fallback: "false",
  });

  const links = [
    { linkName: "Home", path: "/" },
    { linkName: "Signup", path: "/signup" },
    { linkName: "Login", path: "/login" },
    { linkName: "About Us", path: "/aboutus" },
    { linkName: "Privacy", path: "/privacy" },
    { linkName: "Form", path: "/form" },
  ];

  const NavLink = ({ path, children }) => (
    <Link
      as={ReactLink}
      to={path}
      px={2}
      py={2}
      rounded="md"
      _hover={{ textDecoration: "none", bg: "rgba(132, 232, 125, 0.2)" }}
    >
      {children}
    </Link>
  );

  const NavigationBar = (
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

  const MenuDropDown = (
    <HStack>
      <Menu isLazy>
        <MenuButton>
          <HamburgerIcon boxSize="25px" m="2" />
        </MenuButton>
        <MenuList>
          <List>
            {links.map((link) => (
              <NavLink key={link.linkName} path={link.path}>
                <MenuItem fontSize="lg" letterSpacing="wider">
                  {link.linkName}
                </MenuItem>
              </NavLink>
            ))}
          </List>
        </MenuList>
      </Menu>
      <Spacer />
      <ColorModeSwitcher m="2" />
    </HStack>
  );
  return <>{isLargerThan400 ? MenuDropDown : NavigationBar}</>;
};

export default NavBar;
