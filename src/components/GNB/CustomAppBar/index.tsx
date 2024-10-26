import { AppBar, CheckForApplicationUpdate } from "react-admin";
import { Box, Typography, useTheme } from "@mui/material";

import ServerStatus from "../ServerStatus";

const CustomAppBar = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <AppBar
      sx={{
        backgroundColor: isDarkMode ? "#000000" : "#181F47",
        height: "50px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
        <Typography variant="h6" component="h1" sx={{ marginRight: 2 }}>
          Linked Out
        </Typography>
        <ServerStatus />
      </Box>
      <CheckForApplicationUpdate />
    </AppBar>
  );
};

export default CustomAppBar;
