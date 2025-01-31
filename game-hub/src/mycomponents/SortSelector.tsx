import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import useGameQueryStore from "@/store";
import { HStack } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";

/**
 * SortSelector component allows users to select a sorting order for a list of items.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered SortSelector component.
 *
 * @example
 * <SortSelector />
 *
 * The component uses a dropdown menu to display sorting options such as "Relevance", "Date added", "Name", "Release date", "Popularity", and "Average Rating".
 * When a user selects an option, the sort order is updated in the global store.
 */

const SortSelector = () => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface" padding={0}>
          <HStack>
            OrderBy: {currentSortOrder?.label || "Relevance"}
            <FaCaretDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
