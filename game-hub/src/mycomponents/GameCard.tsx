import { Tooltip } from "@/components/ui/tooltip";
import getCroppedImageUrl from "@/services/image-url";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

/**
 * GameCard component displays a card with game details.
 *
 * @component
 * @param {GameProps} props - The props for the GameCard component.
 * @param {Game} props.game - The game object containing details to be displayed.
 *
 * @returns {JSX.Element} A card component displaying the game's image, platform icons, critic score, and name.
 */

//Need to first pass a game object as a prop to GameCard component
//Using an interface to define the shape of the game object
interface GameProps {
  game: Game;
}

const GameCard = ({ game }: GameProps) => {
  return (
    <>
      <Card.Root width="100%">
        <Tooltip showArrow content="Click to view game details">
          <Link to={"games/" + game.slug}>
            <Image
              src={getCroppedImageUrl(game.background_image)}
              alt="background_image"
            />
          </Link>
        </Tooltip>
        <Card.Body>
          <HStack justifyContent="space-between" marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
          <Heading fontSize="2xl">
            <Tooltip showArrow content="Click to view game details">
              <Link to={"games/" + game.slug}>{game.name}</Link>
            </Tooltip>
          </Heading>
        </Card.Body>
        <Card.Footer />
      </Card.Root>
    </>
  );
};

export default GameCard;
