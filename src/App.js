import React from "react";
import {Button, Grid, GridItem, Select, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div>
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`
        }}>
            <GridItem gridArea='nav'>
                <NavBar/>
            </GridItem>
            <Show above='lg'>
                <GridItem gridArea='aside' bg='gold'>ASIDE</GridItem>
            </Show>
            <GridItem gridArea='main' bg='dodgerblue'>MAIN</GridItem>
        </Grid>
    </div>
  );
}

export default App;
