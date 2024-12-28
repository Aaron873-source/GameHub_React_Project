import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { HStack } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";

/**
 * SortSelector component allows users to select a sorting order for a list of items.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {function} props.onSelectSortOrder - Callback function to handle the selection of a sort order.
 * @param {string} props.sortOrder - The current sort order value.
 *
 * @returns {JSX.Element} The rendered SortSelector component.
 *
 * @example
 * <SortSelector onSelectSortOrder={handleSortOrder} sortOrder={currentSortOrder} />
 *
 * The component uses a dropdown menu to display sorting options such as "Relevance", "Date added", "Name", "Release date", "Popularity", and "Average Rating".
 * When a user selects an option, the `onSelectSortOrder` callback is triggered with the selected sort order value.
 */

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface">
          <HStack>
            Order by : {currentSortOrder?.label || "Relevance"}
            <FaCaretDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectSortOrder(order.value)}
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
