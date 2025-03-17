import { FC } from 'react'
import { Link, useOutletContext } from 'react-router-dom';
import { Note } from '../../components/Types';
import { PageContainer } from '../../styled/PageContainer';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import Markdown from 'react-markdown';
import { deleteNote } from '../../redux/slices/NoteSlices';
import { useDispatch } from 'react-redux';
const Detail:FC = () => {
  const note = useOutletContext<Note>();
  const dispatch = useDispatch();


  const handleDelete = (id:string) => {
    dispatch(deleteNote(id));
  }

  return (
  <PageContainer>
    <Stack direction="column" justifyContent="space-between" height="100%">
      <Box>
        <Stack gap={1}>
          <Typography variant="h3">{note.title}</Typography>
          <Stack direction="row" gap={1} mt={2} flexWrap="wrap" >
            {note.tags.map((tag)=> <Chip key={tag} label={tag} />)}
          </Stack>
        </Stack>
        <Box marginY={4} className='markdown'>
          <Markdown >{note.markdown}</Markdown>
        </Box>
      </Box>
     <Stack direction="row" gap={2} justifyContent="end" py={4}>
      <Button component={Link} to="/" variant="contained" color="primary">Back</Button>
      <Button component={Link} to="edit" variant="contained" color="info">Edit</Button>
      <Button onClick={()=>{handleDelete(note.id)}} variant="contained" color="secondary">Delete</Button>
     </Stack>
    </Stack>
  </PageContainer>
  )
}

export default Detail;
