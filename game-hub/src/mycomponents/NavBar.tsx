import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/idea_logo2.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
/**
 * NavBar component that renders a navigation bar with a logo, title, search input, and color mode switch.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered NavBar component.
 *
 * @example
 * <NavBar />
 */

const NavBar = () => {
  return (
    <>
      <Box textAlign="center" paddingTop={2}>
        <Link to="/">
          <Text
            fontFamily="'Press Start 2P', cursive"
            fontSize={{ base: "1xl", sm: "1xl", md: "2xl" }}
          >
            Aaron's Game-Hub
          </Text>
        </Link>
      </Box>
      <HStack padding="10px">
        <Link to="/">
          <Image src={logo} alt="logo" boxSize="81px" fit="contain" />
        </Link>
        <SearchInput></SearchInput>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
