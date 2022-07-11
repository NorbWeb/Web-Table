import NavBar from "../navbar/NavBar";
import { Typography, Box } from "@mui/material";

export default function Player() {
  return (
    <div>
      <NavBar />
      <Box sx={{ m: 2 }}>
        <Typography sx={{ mb: 2 }} variant="h4">
          Player Page
        </Typography>
      </Box>
    </div>
  );
}
