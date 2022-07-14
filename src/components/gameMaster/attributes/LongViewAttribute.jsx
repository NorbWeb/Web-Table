import {
  Box,
  Card,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

function LongViewAttribute({
  attributes,
  name,
  setName,
  short,
  setShort,
  startValue,
  setStartValue,
  explanation,
  setExplanation,
  handleDelete,
  handleChange,
  handleEdit,
  editOpen,
  activeIndex,
}) {
 

  return (
    <Box
      className="attributes-long-view"
      sx={{
        height: "fit-content",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "secondary.light",
        p: 2,
      }}
    >
      <Typography sx={{ width: "100%" }} align="center" variant="h6">
        Long view
      </Typography>
      {/* Maps over attributes array to create attribute boxes */}
      {attributes.map((attribute, index) => (
        <Card
          key={attribute.name}
          elevation={5}
          sx={{
            backgroundColor: "secondary.main",
            maxWidth: "45%",
            height: "auto",
            margin: "1ch",
            borderRadius: "10px",
            p: 1,
          }}
        >
          {editOpen && activeIndex === index ? (
            /* ---------------------------- show edit view ---------------------------- */
            <Stack direction="row">
              <Stack direction="column">
                <TextField
                  value={name}
                  autoComplete="false"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  inputProps={{
                    style: {
                      padding: 3,
                    },
                  }}
                />
                <TextField
                  value={short}
                  autoComplete="false"
                  onChange={(e) => {
                    setShort(e.target.value);
                  }}
                  inputProps={{
                    style: {
                      padding: 3,
                    },
                  }}
                />
                <TextField
                  value={startValue}
                  autoComplete="false"
                  onChange={(e) => {
                    setStartValue(e.target.value);
                  }}
                  inputProps={{
                    style: {
                      padding: 3,
                    },
                  }}
                />
              </Stack>
              <TextField
                sx={{ width: "130%" }}
                multiline
                minRows={3}
                maxRows={3}
                value={explanation}
                autoComplete="false"
                onChange={(e) => {
                  setExplanation(e.target.value);
                }}
                InputProps={{
                  style: {
                    padding: 3,
                    m: 0,
                    fontSize: "0.8rem",
                    height: "100%",
                    width: "100%",
                  },
                }}
              />
              <Stack justifyContent="flex-end">
                <IconButton
                  size="small"
                  disableRipple={true}
                  type="submit"
                  sx={{
                    pl: 2,
                    width: "23px",
                    height: "23px",
                    "&:hover": {
                      color: "success.main",
                    },
                  }}
                  onClick={() => handleChange(index)}
                >
                  <CheckIcon />
                </IconButton>
              </Stack>
            </Stack>
          ) : (
            /* ---------------------------- show normal view ---------------------------- */
            <Stack direction="row">
              <Stack direction="column">
                <Typography variant="body1" sx={{ mr: 1 }}>
                  {attribute.name}
                </Typography>
                <Box sx={{ minWidth: "8ch" }}>
                  <Typography variant="body2">{attribute.short}</Typography>
                  <Typography>{attribute.startValue}</Typography>
                </Box>
              </Stack>
              <Typography
                variant="caption"
                sx={{
                  backgroundColor: "secondary.light",
                  p: 1,
                  borderRadius: "10px",
                  minHeight: "60px",
                }}
              >
                {attribute.explanation}
              </Typography>
              <Stack justifyContent="space-between">
                <IconButton
                  size="small"
                  sx={{
                    pl: 2,
                    pb: 2,
                    width: "23px",
                    height: "23px",
                    "&:hover": {
                      color: "error.main",
                    },
                  }}
                  onClick={() => handleDelete(index)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  disableRipple={true}
                  sx={{
                    pl: 2,
                    width: "23px",
                    height: "23px",
                    "&:hover": {
                      color: "warning.main",
                    },
                  }}
                  onClick={() => handleEdit(index)}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          )}
        </Card>
      ))}
    </Box>
  );
}

LongViewAttribute.propTypes = {
  attributes: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  short: PropTypes.string.isRequired,
  setShort: PropTypes.func.isRequired,
  startValue: PropTypes.string.isRequired,
  setStartValue: PropTypes.func.isRequired,
  explanation: PropTypes.string.isRequired,
  setExplanation: PropTypes.func.isRequired,
  editOpen: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
};

export default LongViewAttribute;

