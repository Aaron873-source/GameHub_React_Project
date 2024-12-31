import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
/**
 * A container component for game cards.
 *
 * This component wraps its children with a `Box` component from Chakra UI,
 * applying a border radius and hiding any overflow content.
 *
 * @param {Props} props - The props for the component.
 * @param {ReactNode} props.children - The child elements to be rendered inside the container.
 *
 * @returns {JSX.Element} The rendered `Box` component containing the children.
 */
interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow={"hidden"}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
