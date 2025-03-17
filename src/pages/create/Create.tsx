import { FC } from 'react'
import { Typography } from '@mui/material'
import { PageContainer } from '../../styled/PageContainer'
import Form from '../../components/form/Form'
import { NoteData } from '../../components/Types'
import { AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { addNote } from '../../redux/slices/NoteSlices'
import { useNavigate } from 'react-router-dom'

const Create:FC = () => {
    const dispatch=useDispatch<AppDispatch>();
    const navigate=useNavigate();
    
    const handleSubmit=(data:NoteData)=>{
        dispatch(addNote(data));
        navigate('/');
    }
  return (
    <PageContainer>
        <Typography variant='h4'>Create Note</Typography>
        <Form handleSubmit={handleSubmit} />
    </PageContainer>
  )
}

export default Create