import GameGrid from "@/mycomponents/GameGrid";
import GameHeading from "@/mycomponents/GameHeading";
import GenreList from "@/mycomponents/GenreList";
import PlatformSelector from "@/mycomponents/PlatformSelector";
import SortSelector from "@/mycomponents/SortSelector";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const HomePage = () => {
  // useBreakpointValue is used to set showAside to true for lg and larger breakpoints, and false for smaller breakpoints.
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Grid
        templateAreas={{
          //Defining two different layouts for different screen sizes
          //One for mobile devices and for large devices with screens wider than 1024px
          //Mobile layout, we only have nav and main areas we do not have aside
          base: `"main"
    `,
          //Large layout, we have all three areas , wider than 1024px
          lg: `"aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      >
        {/* To make sure the aside is only rendered in large devices */}
        {/* The Aside component is conditionally rendered based on the value of showAside. */}
        {showAside && (
          <GridItem area="aside" padding={5}>
            <GenreList></GenreList>
          </GridItem>
        )}
        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading></GameHeading>
            <HStack marginBottom={5} columnGap={3}>
              <PlatformSelector></PlatformSelector>
              <SortSelector></SortSelector>
            </HStack>
          </Box>
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
