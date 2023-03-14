import { Menu } from "../../components/menu";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/system";

export function Dell() {
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <div>
          <Menu userName="Chloe Price " userRole="Developer" />
        </div>

        <div id="detail">
          <Outlet />
        </div>
      </Box>
    </div>
  );
}
