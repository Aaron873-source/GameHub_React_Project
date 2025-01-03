/**
 * @file DefinitionItem.tsx
 * @description This file contains the DefinitionItem component, which is a React functional component
 * that displays a term and its corresponding definition or description.
 *
 * The component uses Chakra UI's Box and Heading components for styling.
 *
 * @module DefinitionItem
 */

import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

/**
 * Props interface for the DefinitionItem component.
 *
 * @interface Props
 * @property {string} term - The term to be defined or described.
 * @property {ReactNode | ReactNode[]} children - The definition or description of the term.
 */

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

/**
 * DefinitionItem component.
 *
 * @param {Props} props - The props for the component.
 * @returns {JSX.Element} A JSX element that displays a term and its corresponding definition or description.
 *
 * @example
 * <DefinitionItem term="Example Term">
 *   This is the definition or description of the example term.
 * </DefinitionItem>
 */
const DefinitionItem = ({ term, children }: Props) => {
  return (
    <>
      <Box marginY={5}>
        <Heading as="dt" fontSize="md" color="gray.600">
          {term}
        </Heading>
        <dd>{children}</dd>
      </Box>
    </>
  );
};

export default DefinitionItem;
