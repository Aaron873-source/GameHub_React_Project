import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms, { Platform } from "@/hooks/usePlatforms";
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
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error } = usePlatforms();

  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

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
        {data?.results.map((platform) => (
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
