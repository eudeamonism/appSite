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
import { Link as ReactLink, useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../Components/ColorModeSwitcher";

const NavBar = () => {
  const navigate = useNavigate();
  const [isLargerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  const [isLargerThan900] = useMediaQuery("(width > 900px)");

  const NavigationBar = (
    <Flex
      h="16"
      alignItems="center"
      justifyContent="space-between"
      bg={useColorModeValue("rgba(0,0,0,.05)", "gray.900")}
      px="4"
      minW="1000px"
    >
      <Link>
        <Text
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </Text>
      </Link>
      <Text color="gray.400" cursor="pointer">
        SignUp
      </Text>

      <Link>
        <Text
          onClick={() => {
            navigate("/teams");
          }}
        >
          List of Teams/Add Your Team
        </Text>
      </Link>
     
      <Link>
        <Text
          onClick={() => {
            navigate("/privacy");
          }}
        >
          Privacy
        </Text>
      </Link>
      <Link>
        <Text
          onClick={() => {
            navigate("/eula");
          }}
        >
          End User Agreement
        </Text>
      </Link>
      <Link>
        <Text
          onClick={() => {
            navigate("/form");
          }}
        >
          Form
        </Text>
      </Link>
      
      <Link>
        <Text
          onClick={() => {
            navigate("/music");
          }}
        >
          Music Credits
        </Text>
      </Link>
      <Text color="gray.400" cursor="pointer">
        Thankyous
      </Text>
      <Link>
        <Text
          onClick={() => {
            navigate("/aboutus");
          }}
        >
          About Us
        </Text>
      </Link>

      <Flex alignItems="center" ml="150px">
        <Text color="gray.400" cursor="pointer">
          Login
        </Text>
        <ColorModeSwitcher />
      </Flex>
    </Flex>
  );

  const MenuDropDown = (
    <HStack>
      <Menu isLazy>
        <MenuButton>
          <HamburgerIcon boxSize="25px" m="2" />
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem color="gray.400">Signup</MenuItem>
          <MenuItem>
            <Link
              onClick={() => {
                navigate("/aboutus");
              }}
            >
              About Us
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              onClick={() => {
                navigate("/privacy");
              }}
            >
              Privacy
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              onClick={() => {
                navigate("/form");
              }}
            >
              Form
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              onClick={() => {
                navigate("/teams");
              }}
            >
              List of Teams/Add your Team
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              onClick={() => {
                navigate("/music");
              }}
            >
              Music Credits
            </Link>
          </MenuItem>
          
          <MenuItem color="gray.400">Thankyous</MenuItem>
        </MenuList>
      </Menu>
      <Spacer />
      <ColorModeSwitcher m="2" />
    </HStack>
  );
  return <>{isLargerThan850 ? MenuDropDown : NavigationBar}</>;
};

export default NavBar;
