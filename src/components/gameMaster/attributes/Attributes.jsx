import { Grid } from "@mui/material";
import { useState } from "react";
import CreateAttribute from "./CreateAttribute";
import LongView from "./LongView";
import ShortView from "./ShortView";

const startList = [
  {
    id: 1,
    name: "Strenght",
    short: "ST",
    startValue: 10,
    explanation: "Your physical power to lift items and make meele damage.",
  },
  {
    id: 2,
    name: "Dexterity",
    short: "DE",
    startValue: 20,
    explanation:
      "Your physical smoothness to avoid damage and handle range weapons.",
  },
  {
    id: 3,
    name: "Intelligence",
    short: "IN",
    startValue: 30,
    explanation:
      "Your mental power to think through complex problems and find solutions.",
  },
  {
    id: 4,
    name: "Wisdom",
    short: "WI",
    startValue: 40,
    explanation:
      "Your inner compass to find appropaite ways to handle difficulte situations.",
  },
  {
    id: 5,
    name: "Luck",
    short: "LU",
    startValue: 50,
    explanation:
      "Your capability of doing stuff that helps you without intention.",
  },
  {
    id: 6,
    name: "Resilience",
    short: "RE",
    startValue: 60,
    explanation:
      "Your physical resistance to damage and other dangerous thrteats to your body.",
  },
];

function Attributes() {
  const [name, setName] = useState("");
  const [short, setShort] = useState("");
  const [startValue, setStartValue] = useState("");
  const [explanation, setExplanation] = useState("");
  const [attributes, setAttributes] = useState(startList);
  const [editOpen, setEditOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState("");

  const handleChange = (index) => {
    setEditOpen(false);
    attributes[index].name = name;
    attributes[index].short = short;
    attributes[index].startValue = startValue;
    attributes[index].explanation = explanation;
    setName("");
    setShort("");
    setStartValue("");
    setExplanation("");
  };

  const handleEdit = (index) => {
    setEditOpen(true);
    setActiveIndex(index);
    setName(attributes[index].name);
    setShort(attributes[index].short);
    setStartValue(attributes[index].startValue);
    setExplanation(attributes[index].explanation);
  };

  const handleDelete = (index) => {
    const newAtt = [...attributes];
    newAtt.splice(index, 1);
    setAttributes([...newAtt]);
  };

  const handleSubmit = () => {
    setAttributes([
      ...attributes,
      {
        id: attributes.length + 1,
        name,
        short,
        startValue,
        explanation,
      },
    ]);
    setName("");
    setShort("");
    setStartValue("");
    setExplanation("");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={11} md={6} lg={5}>
        <CreateAttribute
          name={name}
          setName={setName}
          short={short}
          setShort={setShort}
          startValue={startValue}
          setStartValue={setStartValue}
          explanation={explanation}
          setExplanation={setExplanation}
          handleSubmit={handleSubmit}
          editOpen={editOpen}
        />
        <ShortView attributes={attributes} />
      </Grid>
      <Grid item xs={11} md={5.5} lg={6.5}>
        <LongView
          attributes={attributes}
          name={name}
          setName={setName}
          short={short}
          setShort={setShort}
          startValue={startValue}
          setStartValue={setStartValue}
          explanation={explanation}
          setExplanation={setExplanation}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          editOpen={editOpen}
          activeIndex={activeIndex}
        />
      </Grid>
    </Grid>
  );
}

export default Attributes;
