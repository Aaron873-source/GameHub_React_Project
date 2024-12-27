import useGenres from "@/hooks/useGenres";
import getCroppedImageUrl from "@/services/image-url";
import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
/**
 * GenreList component fetches and displays a list of genres.
 *
 * This component uses the `useGenres` hook to fetch genre data and displays each genre
 * in a list item with an image and name. The list is rendered using Chakra UI components.
 *
 * @component
 * @example
 * // Example usage:
 * // <GenreList />
 *
 * @returns {JSX.Element} A list of genres with images and names.
 */
const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) {
    return (
      <VStack colorPalette="teal">
        <Spinner color="gray" />
        <Text color="gray">Genres Loading...</Text>
      </VStack>
    );
  }

  return (
    <List.Root listStyleType={"none"}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenreList;
