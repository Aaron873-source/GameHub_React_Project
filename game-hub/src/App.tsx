import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import GameGrid from "./mycomponents/GameGrid";
import GenreList from "./mycomponents/GenreList";
import NavBar from "./mycomponents/NavBar";
import PlatformSelector from "./mycomponents/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // useBreakpointValue is used to set showAside to true for lg and larger breakpoints, and false for smaller breakpoints.
  const showAside = useBreakpointValue({ base: false, lg: true });

  return (
    <>
      <Grid
        templateAreas={{
          //Defining two different layouts for different screen sizes
          //One for mobile devices and for large devices with screens wider than 1024px
          //Mobile layout, we only have nav and main areas we do not have aside
          base: `
          "nav"
          "main"
        `,
          //Large layout, we have all three areas , wider than 1024px
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{ base: "1fr", lg: "200px 1fr" }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        {/* To make sure the aside is only rendered in large devices */}
        {/* The Aside component is conditionally rendered based on the value of showAside. */}
        {showAside && (
          <GridItem area="aside" padding={5}>
            <GenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            ></GenreList>
          </GridItem>
        )}
        <GridItem area="main">
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          ></PlatformSelector>
          <GameGrid gameQuery={gameQuery}></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
