import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Card } from "@chakra-ui/react";

/**
 * `GameCardSkeleton` is a functional React component that renders a skeleton placeholder
 * for a game card. This is typically used to indicate loading content while the actual
 * game card data is being fetched.
 *
 * The component utilizes the `Skeleton` and `SkeletonText` components from the UI library,
 * and the `Card` component from Chakra UI to create a visual representation of the loading state.
 *
 * @returns {JSX.Element} A skeleton placeholder for a game card.
 */

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px"></Skeleton>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCardSkeleton;
