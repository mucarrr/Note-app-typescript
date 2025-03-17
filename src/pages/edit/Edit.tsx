import { FC } from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom';
import { Note, NoteData } from '../../components/Types';
import { PageContainer } from '../../styled/PageContainer';
import {  Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { updateNote } from '../../redux/slices/NoteSlices';
import Form from '../../components/form/Form';

const Edit:FC = () => {
  const note = useOutletContext<Note>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data:NoteData) => {
    if(!data.title || !data.markdown || !data.tags) return alert('Please fill all the fields');
    dispatch(updateNote({id:note.id, ...data}));
    navigate('/');
  }
  return (
    <PageContainer>
      <Typography variant="h4" sx={{mb:5}}>Update Note</Typography>
      <Form note={note} handleSubmit={handleSubmit}/>
    </PageContainer>
  )
}

export default Edit;
