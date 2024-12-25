import { Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "./mycomponents/NavBar";

function App() {
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
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        {/* To make sure the aside is only rendered in large devices */}
        {/* The Aside component is conditionally rendered based on the value of showAside. */}
        {showAside && (
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        )}
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
