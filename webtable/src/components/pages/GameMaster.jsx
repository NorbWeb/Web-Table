import Attribute from "../gameMaster/attribute/Attribute";
import NavBar from "../navbar/NavBar";
import { Typography, Box } from "@mui/material";

export default function GameMaster() {
  return (
    <div>
      <NavBar />
      <Box sx={{ m: 2 }}>
        <Typography sx={{ mb: 2 }} variant="h4">
          Game Master Page
        </Typography>
        <Attribute />
      </Box>
    </div>
  );
}
