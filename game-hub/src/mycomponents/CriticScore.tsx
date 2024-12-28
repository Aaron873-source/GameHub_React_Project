import { Badge } from "@chakra-ui/react";

/**
 * CriticScore component displays a score with a color-coded badge.
 *
 * @param {Props} props - The properties object.
 * @param {number} props.score - The critic score to be displayed.
 *
 * @returns {JSX.Element} A Badge component from Chakra UI with the critic score.
 *
 * The badge color is determined by the score:
 * - Green if the score is greater than 75.
 * - Yellow if the score is greater than 60 but less than or equal to 75.
 * - Grey if the score is 60 or below.
 */

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "grey";

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4PX" colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
