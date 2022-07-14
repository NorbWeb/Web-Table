import * as React from "react";
import NavBar from "../navbar/NavBar";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import PropTypes from "prop-types";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`player-tabpanel-${index}`}
      aria-labelledby={`player-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `player-tab-${index}`,
    "aria-controls": `player-tabpanel-${index}`,
  };
}

export default function Player() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <NavBar />
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            backgroundColor: "primary.light",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="player tabs"
            variant="centered"
            indicatorColor="secondary"
            textColor="text"
          >
            <Tab label="Dashboard" {...a11yProps(0)} />
            <Tab label="Skills" {...a11yProps(1)} />
            <Tab label="Equipment" {...a11yProps(2)} />
            <Tab label="Magic!?" {...a11yProps(3)} />

          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Your Dashboard
          </Typography>
          Here you will find your personal Dashboard. By now its
          empty, but be enthusiastic about what will come in future!
        </TabPanel>
        <TabPanel value={value} index={1}>
          Skill-less bastard, HAHA!
        </TabPanel>
        <TabPanel value={value} index={2}>
          You are poor to the bone.
        </TabPanel>
        <TabPanel value={value} index={3}>
          Is their magic? Hallo................................
        </TabPanel>
      </Box>
    </div>
  );
}
