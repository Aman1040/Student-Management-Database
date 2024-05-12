import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Description from "./Description";
const DrawerComp = () => {
  const [isdraweropen, setIsdrawopen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsdrawopen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isdraweropen}
        onClose={() => {
          setIsdrawopen(false);
        }}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            About this Project :
            <Description />
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerComp;
