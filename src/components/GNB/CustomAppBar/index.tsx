import { AppBar, CheckForApplicationUpdate } from "react-admin";
import { Box, Typography } from "@mui/material";

import ServerStatus from "../ServerStatus";

const CustomAppBar = () => (
  <AppBar>
    <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
      <Typography variant="h6" component="h1" sx={{ marginRight: 2 }}>
        Linked Out
      </Typography>
      <ServerStatus />
    </Box>
    <CheckForApplicationUpdate />
  </AppBar>
);

export default CustomAppBar;
