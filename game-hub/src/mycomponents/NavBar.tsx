import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/idea_logo2.jpeg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

/**
 * NavBar component that renders a navigation bar with a logo, search input, and color mode switch.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {function} props.onSearch - Callback function to handle search input.
 *
 * @returns {JSX.Element} The rendered NavBar component.
 *
 * @example
 * <NavBar onSearch={(searchText) => console.log(searchText)} />
 */

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} alt="logo" boxSize="81px" />
      </Link>
      <SearchInput></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
