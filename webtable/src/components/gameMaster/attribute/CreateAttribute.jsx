import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";

function CreateAttribute({name,
  setName,
  short,
  setShort,
  startValue,
  setStartValue,
  explanation,
  setExplanation,
  handleSubmit,
  editOpen}) {
  

  return (
    <Box
      className="create-attribute"
      sx={{
        p: 2,
        backgroundColor: "secondary.light",
      }}
    >
      <Typography align="center" sx={{ width: "100%", mb: 1 }} variant="h6">
        Create a new Attribute
      </Typography>
      <Stack alignItems="flex-end" direction="row" spacing={2}>
        <Stack spacing={2}>
          <TextField
            type="text"
            label="Name"
            autoComplete="false"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={editOpen ? "" : name}
          />
          <TextField
            type="text"
            label="Short form"
            autoComplete="false"
            onChange={(e) => {
              setShort(e.target.value);
            }}
            value={editOpen ? "" : short}
          />
          <TextField
            type="number"
            label="Start value"
            onChange={(e) => {
              setStartValue(e.target.value);
            }}
            value={editOpen ? "" : startValue}
          />
        </Stack>
        <TextField
          sx={{ width: "66%" }}
          multiline
          minRows={7.2}
          maxRows={7.2}
          type="text"
          label="Explanation"
          autoComplete="false"
          onChange={(e) => {
            setExplanation(e.target.value);
          }}
          value={editOpen ? "" : explanation}
        />
      </Stack>
      <Button
        sx={{ mt: 2 }}
        variant="contained"
        onClick={handleSubmit}
        type="submit"
      >
        Add Attribute
      </Button>
    </Box>
  );
}

CreateAttribute.propTypes = {
  name: PropTypes.node.isRequired,
  setName: PropTypes.func.isRequired,
  short: PropTypes.node.isRequired,
  setShort: PropTypes.func.isRequired,
  startValue: PropTypes.node.isRequired,
  setStartValue: PropTypes.func.isRequired,
  explanation: PropTypes.node.isRequired,
  setExplanation: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateAttribute;
