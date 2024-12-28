import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";
import { HStack, Text } from "@chakra-ui/react";

/**
 * ColorModeSwitch component allows users to toggle between light and dark modes.
 *
 * This component uses Chakra UI's `HStack` for horizontal layout, `Switch` for the toggle button,
 * and `Text` to display the label "Dark Mode".
 *
 * It utilizes the `useColorMode` hook from Chakra UI to get the current color mode and the function
 * to toggle between light and dark modes.
 *
 */

const ColorModeSwitch = () => {
  // const [checked, setChecked] = useState(false)

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorPalette="green"
        checked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
