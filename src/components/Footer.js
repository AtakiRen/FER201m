import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SportsSoccerSharpIcon from "@mui/icons-material/SportsSoccerSharp";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0982EC",
        p: 2,
        mt: "auto",
        color: "#ffffff",
        marginTop: "10px",
        fontSize: "18px",
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={1}>
        <Grid item>
          <SportsSoccerSharpIcon />
        </Grid>
        <Grid item>
          <Typography variant="body2">
            2023 Best Soccer Player. All rights reserved.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
