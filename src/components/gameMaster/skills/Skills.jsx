import { Grid } from "@mui/material";
import CreateSkill from "./CreateSkill";
import { useState } from "react";
import LongViewSkills from "./LongViewSkill";

const startList = [
  {
    id: 1,
    name: "Test 1",
    startValue: 10,
    explanation: "Your physical power to lift items and make meele damage.",
  },
  {
    id: 2,
    name: "Test 2",
    startValue: 20,
    explanation:
      "Your physical smoothness to avoid damage and handle range weapons.",
  },
  {
    id: 3,
    name: "Test 3",
    startValue: 30,
    explanation:
      "Your mental power to think through complex problems and find solutions.",
  },
  {
    id: 4,
    name: "Test 4",
    startValue: 40,
    explanation:
      "Your inner compass to find appropaite ways to handle difficulte situations.",
  },
  {
    id: 5,
    name: "Test 5",
    startValue: 50,
    explanation:
      "Your capability of doing stuff that helps you without intention.",
  },
  {
    id: 6,
    name: "Test 6",
    startValue: 60,
    explanation:
      "Your physical resistance to damage and other dangerous thrteats to your body.",
  },
];

function Skills() {
  const [name, setName] = useState("");
  const [startValue, setStartValue] = useState("");
  const [explanation, setExplanation] = useState("");
  const [skills, setSkills] = useState(startList);
  const [editOpen, setEditOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");

  const handleChange = (index) => {
    setEditOpen(false);
    skills[index].name = name;
    skills[index].short = short;
    skills[index].startValue = startValue;
    skills[index].explanation = explanation;
    setName("");
    setShort("");
    setStartValue("");
    setExplanation("");
  };

  const handleEdit = (index) => {
    setEditOpen(true);
    setActiveIndex(index);
    setName(skills[index].name);
    setShort(skills[index].short);
    setStartValue(skills[index].startValue);
    setExplanation(skills[index].explanation);
  };

  const handleDelete = (index) => {
    const newAtt = [...skills];
    newAtt.splice(index, 1);
    setSkills([...newAtt]);
  };


  const handleSubmit = () => {
    setSkills([
      ...skills,
      {
        id: skills.length + 1,
        name,
        startValue,
        explanation,
      },
    ]);
    setName("");
    setStartValue("");
    setExplanation("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={11} md={6} lg={5}>
        <CreateSkill
          name={name}
          setName={setName}
          startValue={startValue}
          setStartValue={setStartValue}
          explanation={explanation}
          setExplanation={setExplanation}
          handleSubmit={handleSubmit}
          editOpen={editOpen}
        />
      </Grid>
      <Grid item xs={11} md={5.5} lg={6.5}>
        <LongViewSkills 
        skills={skills}
        name={name}
        setName={setName}
        startValue={startValue}
        setStartValue={setStartValue}
        explanation={explanation}
        setExplanation={setExplanation}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        editOpen={editOpen}
        activeIndex={activeIndex}/>
      </Grid>
    </Grid>
  );
}

export default Skills;
