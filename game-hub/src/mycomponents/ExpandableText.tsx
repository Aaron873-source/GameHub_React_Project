/**
 * @file ExpandableText.tsx
 * @description This file contains the definition of the ExpandableText component, which is a React component that displays a text with a "Read More" or "Show Less" button to expand or collapse the text content.
 */

import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

/**
 * @interface Props
 * @description Defines the props for the ExpandableText component.
 * @property {string} children - The text content to be displayed within the component.
 */

interface Props {
  children: string;
}

/**
 * @function ExpandableText
 * @description A React functional component that displays a text with a "Read More" or "Show Less" button to expand or collapse the text content.
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element | null} The rendered component or null if no children are provided.
 */
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size={"xs"}
        fontWeight={"bold"}
        colorPalette={"yellow"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>{" "}
    </Text>
  );
};

export default ExpandableText;
