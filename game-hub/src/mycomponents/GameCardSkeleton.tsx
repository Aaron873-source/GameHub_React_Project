import { Skeleton, SkeletonText } from "@/components/ui/skeleton";
import { Card } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card.Root width="300px" borderRadius={10} overflow={"hidden"}>
      <Skeleton height="200px"></Skeleton>
      <Card.Body>
        <SkeletonText></SkeletonText>
      </Card.Body>
      <Card.Footer />
    </Card.Root>
  );
};

export default GameCardSkeleton;
