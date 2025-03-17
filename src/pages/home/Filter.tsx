import { Grid2, TextField, Autocomplete } from "@mui/material"
import { FC } from "react"
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

interface Props{
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}


const Filter:FC<Props> = ({setTitle, setSelectedTags}) => {
    const {tags}=useSelector((store:RootState)=>store.tags);
  return (
   <Grid2 container spacing={6} mt={5}>
     <Grid2 size={6}>
        <TextField
        label="Search with title"
        variant="outlined"
        fullWidth
        onChange={(e)=>setTitle(e.target.value)}
        />
     </Grid2>
     <Grid2 size={6}>
        <Autocomplete
        multiple
        id="tags-search"
        options={tags}
        onChange={(event, value)=>setSelectedTags(value)}
        renderInput={(params)=>(
            <TextField {...params} label="Search with tags" />
        )}
        />
     </Grid2>
   </Grid2>
  )
}

export default Filter