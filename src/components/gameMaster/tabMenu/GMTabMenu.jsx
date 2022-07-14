import * as React from "react";
import { Link, Box, MenuItem, Typography } from "@mui/material";
import { Link as RouterLink, MemoryRouter, Outlet } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import PropTypes from "prop-types";

// To convert react-router Links in MUI Links, to style them like MUI components --- start --- //
function Router(props) {
  const { children } = props;
  if (typeof window === "undefined") {
    return <StaticRouter location="/">{children}</StaticRouter>;
  }

  return <MemoryRouter>{children}</MemoryRouter>;
}

Router.propTypes = {
  children: PropTypes.node.isRequired,
};

// ----------------------------------- end ----------------------------------- //

export default function GMTabMenu() {
  const tabs = [
    {
      title: "Attributes",
      path: "/attributes",
    },
  ];

  return (
    <Box
      sx={{ width: "100%", height: "50px", backgroundColor: "primary.light" }}
    >
      {tabs.map((tab) => (
        <Link
          color="text.primary"
          sx={{ textDecoration: "none" }}
          key={tab.title}
          to={tab.path}
          component={RouterLink}
        >
          <MenuItem>
            <Typography textAlign="center">{tab.title}</Typography>
          </MenuItem>
        </Link>
      ))}
    </Box>
  );
}
