import { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";
import { addTag } from "../../redux/slices/TagSlices";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

interface TagSelectProps {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagSelect: FC<TagSelectProps> = ({
  selectedTags,
  setSelectedTags,
}) => {
  const dispatch=useDispatch<AppDispatch>();
  const {tags}=useSelector((state:RootState)=>state.tags);

  return (
    <Autocomplete
      multiple
      freeSolo
      options={tags}
      value={selectedTags}
      onChange={(_, inputTags) => {
        if (inputTags.length === 5) {
          return alert("You can only add 5 tags");
        } 
        if(inputTags[inputTags.length-1]){
        dispatch(addTag(inputTags[inputTags.length-1]));
        }
          setSelectedTags(inputTags);
        
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="outlined"
          label="Tags"
          placeholder="Add tags"
        />
      )}
    />
  );
};

export default TagSelect;
