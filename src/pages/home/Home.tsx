import { FC, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Alert, Button, Grid2, Stack, Typography } from "@mui/material";
import { PageContainer } from "../../styled/PageContainer";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import NoteCard from "./NoteCard";

const Home: FC = () => {
  const notes = useSelector((store: RootState) => store.notes);
  const [title, setTitle] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredNotes = useMemo(
    () =>
      notes.filter(
        (note) =>
          note.title.toLowerCase().includes(title.toLowerCase()) &&
          selectedTags.every((stag) => note.tags.includes(stag))
      ),
    [notes, title, selectedTags]
  );

  console.log("Home Notes:", notes);

  return (
    <PageContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
          <img src="/logo(1).png" alt="logo" width={50} />
          <Typography variant="h4">Notes</Typography>
        </Stack>
        <Button
          component={Link}
          to="/create"
          variant="contained"
          color="secondary"
          sx={{ fontWeight: "bold" }}
        >
          Create
        </Button>
      </Stack>
      <Filter setTitle={setTitle} setSelectedTags={setSelectedTags} />
      <Grid2 container spacing={2} mt={5}>
        {filteredNotes.length === 0 ? (
          <Grid2 size={12}>
            <Alert severity="warning">No notes found</Alert>
          </Grid2>
        ) : (
          filteredNotes.map((note) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={note.id}>
              <NoteCard note={note} />
            </Grid2>
          ))
        )}
      </Grid2>
    </PageContainer>
  );
};

export default Home;
