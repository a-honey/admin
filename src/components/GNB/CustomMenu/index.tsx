import { Box, Typography } from "@mui/material";

import { Menu } from "react-admin";

const CustomMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItems />

    <Box sx={{ textAlign: "center", padding: 2 }}>
      <Typography variant="caption" color="textSecondary">
        v1.2.3
      </Typography>
    </Box>
  </Menu>
);

export default CustomMenu;
