import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Font.css";
const Font = () => {
    // Note:-  pela google font website ma javanu ane tya thi pela link copy karvani ane ane tene index.html file ma head section ma put karvani ane pachi css file tame loi pn css file ma use kari sako cho 
  return (
    <div>

        
      <Grid container spacing={2}>
        <Grid item>
          <Box
            className="heading"
            sx={{ width: 200, height: 200, backgroundColor: "pink" }}
          >
            The Box component wraps your component. It creates a new DOM
            element, a that by default can be changed with the component prop.
            Let's say you want to use a instead:
          </Box>
        </Grid>
        <Grid item>
          <Box
            className="heading1"
            sx={{ width: 200, height: 200, backgroundColor: "pink",fontFamily: "'Caveat', cursive"}}
          >
            The Box component wraps your component. It creates a new DOM
            element, a that by default can be changed with the component prop.
            Let's say you want to use a instead:
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Font;
