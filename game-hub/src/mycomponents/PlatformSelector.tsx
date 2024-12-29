import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatforms";
import { HStack } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa"; // Import the dropdown icon
/**
 * PlatformSelector component allows users to select a gaming platform from a dropdown menu.
 *
 * @param {Object} props - The properties object.
 * @param {function} props.onSelectPlatform - Callback function to handle the selection of a platform.
 * @param {Platform | null} props.selectedPlatform - The currently selected platform.
 *
 * @returns {JSX.Element | null} The rendered PlatformSelector component or null if there is an error.
 *
 * This component uses the `usePlatforms` hook to fetch the list of available platforms.
 * It displays a button that triggers a dropdown menu containing the list of platforms.
 * When a platform is selected, the `onSelectPlatform` callback is called with the selected platform.
 */

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface">
          <HStack>
            {selectedPlatform?.name || "Platforms"} <FaCaretDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.name}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;