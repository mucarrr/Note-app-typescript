import { Button, Grid2, Stack, styled, TextField } from "@mui/material";
import { FC, useState } from "react";
import TagSelect from "./TagSelect";
import { Note, NoteData } from "../Types";
import { Link } from "react-router-dom";

const Label = styled("label")({
  fontSize: "12px",
});

interface FormProps {
  note?: Note;
    handleSubmit: (data: NoteData) => void;
  }

const Form: FC<FormProps> = ({ note, handleSubmit }) => {
  const [title, setTitle] = useState<string>(note?.title || "");
  const [markDown, setMarkDown] = useState<string>(note?.markdown || "");
  const [selectedTags, setSelectedTags] = useState<string[]>(note?.tags || []);



  const handleForm = () => {
    if(!title || !markDown || !selectedTags.length){
      return alert("Please fill all fields");
    }
   handleSubmit({title, markdown:markDown, tags:selectedTags});
  };
  return (
    <Stack spacing={7} sx={{ mt: 5 }}>
      <Grid2 container spacing={5}>
        <Grid2 size={6}>
          <TextField
            variant="outlined"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Grid2>
        <Grid2 size={6}>
          <TagSelect
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </Grid2>
      </Grid2>
      <Stack gap={2}>
        <Label>Content(Markdown is supported)</Label>
        <TextField
          variant="outlined"
          fullWidth
          minRows={15}
          maxRows={30}
          multiline
          onChange={(e) => setMarkDown(e.target.value)}
          value={markDown}
        />
      </Stack>
      <Stack direction="row" spacing={5} justifyContent={"end"}>
        <Button component={Link} to={note ? `/note/${note.id}` : ".."}
          type="button"
          variant="contained"
          color="secondary"
          sx={{ minWidth: "120px" }}
        >
          Back
        </Button>
        <Button
          onClick={handleForm}
          variant="contained"
          color="secondary"
          sx={{ minWidth: "120px" }}
        >
          Save
        </Button>
      </Stack>
    </Stack>
  );
};

export default Form;
