import React from 'react';
import {
    Grid,
    ResponsiveContext

} from "grommet";
  
  const ResponsiveGrid = ({ children, areas, ...props }) => {
    const size = React.useContext(ResponsiveContext);
    return (
      <Grid areas={areas[size]} {...props}>
        {children}
      </Grid>
    );
  };

  ResponsiveGrid.defaultProps = {
    areas: {
        xsmall: [
          { name: "header", start: [0, 0], end: [3, 0] },
          { name: "section-1", start: [0, 1], end: [3, 1] },
          { name: "section-2", start: [0, 2], end: [3, 2] },
          { name: "section-3", start: [0, 3], end: [3, 3] }
        ],
        small: [
          { name: "header", start: [0, 0], end: [3, 0] },
          { name: "section-1", start: [0, 1], end: [1, 1] },
          { name: "section-1", start: [2, 1], end: [3, 1] },
          { name: "section-3", start: [0, 2], end: [3, 2] }
        ],
        medium: [
          { name: "header", start: [0, 0], end: [3, 0] },
          { name: "section-1", start: [0, 1], end: [0, 1] },
          { name: "section-2", start: [1, 1], end: [2, 1] },
          { name: "section-3", start: [3, 1], end: [3, 1] }
        ],
        large: [
          { name: "header", start: [0, 0], end: [3, 0] },
          { name: "section-1", start: [0, 1], end: [0, 1] },
          { name: "section-2", start: [1, 1], end: [2, 1] },
          { name: "section-3", start: [3, 1], end: [3, 1] }
        ]
      },
      columns: ["25%", "25%", "25%", "25%"],
      rows: ["3em", "3em", "3em","3em"],
  }

export default ResponsiveGrid