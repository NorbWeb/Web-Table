import {
  Box,
  Card,
  Stack,
  Divider,
  styled,
  Tooltip,
  tooltipClasses,
  Typography,
  Zoom,
} from "@mui/material";
import PropTypes from "prop-types";

/* ------------------------- Stlye variables ------------------------- */
/* ------------------------------ START ------------------------------ */
const styleBox = {
  width: "50%",
  height: "5ch",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

/* eslint-disable-next-line */
const CustomTooltip = styled(({ className, ...props }) => (
  /* eslint-disable-next-line */
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.arrow}`]: {},
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: "0.75rem",
    padding: "10px",
    width: "150px",
  },
}));
/* ------------------------------- END ------------------------------- */

function ShortView({ attributes }) {
  return (
    <Box
      className="attributes-short-view"
      sx={{
        height: "fit-content",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        backgroundColor: "secondary.light",
        p: 2,
        mt: 2,
      }}
    >
      <Typography sx={{ width: "100%" }} align="center" variant="h6">
        Short view
      </Typography>
      {/* Maps over attributes array to create attribute boxes */}
      {attributes.map((attribute) => (
        <Card
          key={attribute.name}
          elevation={5}
          sx={{
            backgroundColor: "secondary.main",
            width: "10ch",
            height: "5ch",
            margin: "1ch",
            borderRadius: "10px",
          }}
        >
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <CustomTooltip
              TransitionComponent={Zoom}
              placement="top"
              arrow
              title={attribute.explanation}
            >
              <Box sx={styleBox}>{attribute.short}</Box>
            </CustomTooltip>
            <Box sx={styleBox}>{attribute.startValue}</Box>
          </Stack>
        </Card>
      ))}
    </Box>
  );
}

ShortView.propTypes = {
  attributes: PropTypes.arrayOf().isRequired,
};

export default ShortView;
