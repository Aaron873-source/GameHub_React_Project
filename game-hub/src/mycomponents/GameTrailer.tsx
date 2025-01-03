import useTrailers from "@/hooks/useTrailers";
/**
 * This component fetches and displays the trailer of a game based on the provided game ID.
 *
 * @component
 * @param {number} gameId - The ID of the game for which the trailer is to be fetched and displayed.
 *
 * @returns {JSX.Element | null} - A video element displaying the game trailer if available, otherwise null.
 *
 * @example
 * // Usage example:
 * <GameTrailer gameId={12345} />
 *
 * @remarks
 * This component uses the `useTrailers` hook to fetch the trailer data. If the data is still loading, it returns null.
 * If there is an error during the fetch, it throws the error. If a trailer is available, it displays the first trailer
 * in a video element with controls. If no trailer is available, it returns null.
 */

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];

  //   Below if if there is a trailer for the game, it will be displayed but if not then return null
  return first ? (
    <video src={first.data[480]} poster={first.preview} controls></video>
  ) : null;
};

export default GameTrailer;
