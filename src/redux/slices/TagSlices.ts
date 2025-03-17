import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {tags:string[]}={
    tags:[]
}

const tagSlice=createSlice({
    name:"tags",
    initialState,
    reducers:{
        addTag:(state,action:PayloadAction<string>)=>{
            if(state.tags.includes(action.payload)){
                return;
            }
            state.tags.push(action.payload);
            
        }
    }
})

export const {addTag}=tagSlice.actions;
export default tagSlice.reducer;