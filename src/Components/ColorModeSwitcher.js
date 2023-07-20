import React from "react";
import { useColorMode, useColorModeValue, IconButton, useMediaQuery } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

export const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const [isSmallerThan850] = useMediaQuery("(max-width: 850px)", {
    ssr: true,
    fallback: "false",
  });

  return (
    <IconButton
      fontSize={!isSmallerThan850 ? "24px" : "22px"}
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="light.800"
      _dark={{ color: "dark.200" }}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};
