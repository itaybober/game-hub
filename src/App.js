import React from "react";
import {Button, Grid, GridItem, Select, Show} from "@chakra-ui/react";
function App() {
  return (
    <div>
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}>
            <GridItem gridArea='nav' bg='coral'>NAV</GridItem>
            <Show above='lg'>
                <GridItem gridArea='aside' bg='gold'>ASIDE</GridItem>
            </Show>
            <GridItem gridArea='main' bg='dodgerblue'>MAIN</GridItem>
        </Grid>
    </div>
  );
}

export default App;
