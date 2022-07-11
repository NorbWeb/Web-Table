import NavBar from "../navbar/NavBar";
import { Typography, Box } from "@mui/material";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Box sx={{ m: 2 }}>
        <Typography sx={{ mb: 2 }} variant="h4">
          Welcome to the Main Page!
        </Typography>
        <Typography>
          By now, no interesting content exist to be displayed. Lay down, wait
          for it and grab something to feed yourself.
        </Typography>
      </Box>
    </div>
  );
}
