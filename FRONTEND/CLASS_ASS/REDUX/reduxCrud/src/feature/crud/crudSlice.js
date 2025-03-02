

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        name:"shk",
        email:"shk@gmail.com",
        number:95625241,
        
    }
]
    

     


export const crudSlice = createSlice({
    name: 'abc',
    initialState,
    reducers:{
        submit_data:(state,actions)=>{
            console.log(actions.payload);
            state.push(actions.payload)
            console.log(state);

        }

    }

})
console.log(crudSlice.actions);

export const {submit_data} = crudSlice.actions
export default crudSlice.reducer