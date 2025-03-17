import { FC } from "react"
import { Note } from "../../components/Types";
import { Chip } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { Typography, CardContent, CardActionArea } from "@mui/material";
import { Card } from "@mui/material";

interface NoteCardProps {
    note: Note;
}
const NoteCard:FC<NoteCardProps> = ({note}) => {
    return (
        <Card   variant="elevation">
          <CardActionArea component={Link} to={`/note/${note.id}`}>
            <CardContent>
              <Typography gutterBottom variant="h5" textAlign="center">
                {note.title}
              </Typography>
    
              <Stack
                direction="row"
                gap={1}
                flexWrap="wrap"
                justifyContent="center"
                mt={2}
              >
                {note.tags.map((tag) => (
                  <Chip key={tag} label={tag} color="secondary" />
                ))}
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    };
    

export default NoteCard;
