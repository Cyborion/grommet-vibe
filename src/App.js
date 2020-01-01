import React from 'react';
import { deepMerge } from "grommet/utils";
import { grommet } from "grommet/themes";
import ResponsiveGrid from "./ResponsiveGrid";
import {defaultAreas, centerBoxAreas} from "./Areas"

import {
  Box,
  Grid,
  Paragraph,
  Grommet,
  Heading,
  ResponsiveContext
} from "grommet";



const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 900
      },
      medium: {
        value: 1600
      },
      large: {
        value: 3000
      }
    }
  }
});

const dBoxStyles = {
  background: "brand",
  justify: "center",
  align: "center"
}


const ResponsiveGridExample = (xD) => (
  <Grommet theme={customBreakpoints} full>
    <ResponsiveGrid areas={defaultAreas}>
      <Box {...dBoxStyles} gridArea="header" background="brand" > xD </Box>
      <Box {...dBoxStyles} gridArea="section-1" background="dark-1" />
      <Box {...dBoxStyles} gridArea="section-2" background="dark-2" />
      <Box gridArea="section-3" background="dark-3" />
    </ResponsiveGrid>
    <ResponsiveGrid areas={centerBoxAreas} >
        <Box gridArea="object1" background="dark-1"></Box>
        <Box gridArea="object2" background={{color: 'blue'}}></Box>
        <Box gridArea="object3" background={{color: 'green'}}></Box>
        <Box gridArea="description1">{`description1`}</Box>
        <Box gridArea="description2">{`description2`}</Box>
        <Box gridArea="description3">{`description3`}</Box>
    </ResponsiveGrid>
    <Box>
      <ResponsiveContext.Consumer>
      {size =>(
        <Box>
          <Paragraph>
            {`Size: ${size}`}
          </Paragraph>
        </Box>
      )}
      </ResponsiveContext.Consumer>
    </Box>
  </Grommet>
);

function App() {
  return (
    <ResponsiveGridExample/>
  );
}

export default App;