import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { HStack } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface" marginLeft={5}>
          <HStack>Order by : Relevance</HStack> <FaCaretDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="date-added"> Date added</MenuItem>
        <MenuItem value="name"> Name</MenuItem>
        <MenuItem value="release-date"> Release date</MenuItem>
        <MenuItem value="popularity"> Popularity</MenuItem>
        <MenuItem value="average-rating">Average Rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
