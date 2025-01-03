import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatform from "@/hooks/usePlatform";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQueryStore from "@/store";
import { HStack } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa"; // Import the dropdown icon
/**
 * PlatformSelector component allows users to select a gaming platform from a dropdown menu.
 *
 * This component uses the `usePlatforms` hook to fetch the list of available platforms.
 * It displays a button that triggers a dropdown menu containing the list of platforms.
 * When a platform is selected, the selected platform ID is updated in the global store using `useGameQueryStore`.
 *
 * @returns {JSX.Element | null} The rendered PlatformSelector component or null if there is an error.
 */

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(selectedPlatformId);

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface" padding={0.5}>
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
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
