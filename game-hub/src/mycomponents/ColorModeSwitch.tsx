import { useColorMode } from "@/components/ui/color-mode";
import { Switch } from "@/components/ui/switch";
import { HStack, Text } from "@chakra-ui/react";

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
