import { Button } from "@/components/ui/button";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import usePlatforms from "@/hooks/usePlatforms";
import { HStack } from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa"; // Import the dropdown icon

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="surface" marginLeft={5}>
          <HStack>
            Platforms <FaCaretDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        {data.map((platform) => (
          <MenuItem key={platform.id} value={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
