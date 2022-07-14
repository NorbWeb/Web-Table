import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useRef } from "react";

function CreateSkill({
  name,
  setName,
  startValue,
  setStartValue,
  explanation,
  setExplanation,
  handleSubmit,
  editOpen,
}) {
  // Reference for SubmitButton to set focus of cursor on first input field after click.
  const ref = useRef(null);
  // onClick function for submitButton
  const handleSubmitButton = () => {
    // submit fuction with state logic
    handleSubmit();
    // set focus on ref
    ref.current.focus();
  };

  return (
    <Box
      className="create-skill"
      sx={{
        p: 2,
        backgroundColor: "secondary.light",
      }}
    >
      <Typography align="center" sx={{ width: "100%", mb: 1 }} variant="h6">
        Create a new Skill
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
            inputRef={ref}
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
        onClick={handleSubmitButton}
        type="submit"
      >
        Add Skill
      </Button>
    </Box>
  );
}

CreateSkill.propTypes = {
  name: PropTypes.node.isRequired,
  setName: PropTypes.func.isRequired,
  startValue: PropTypes.node.isRequired,
  startValue: PropTypes.string.isRequired,
  setStartValue: PropTypes.func.isRequired,
  explanation: PropTypes.node.isRequired,
  setExplanation: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  editOpen: PropTypes.bool.isRequired,
};

export default CreateSkill;
