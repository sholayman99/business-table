import { createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        total:[],
        allProduct:[]
    },
    reducers: {
        setTotal:(state,action)=>{
            state.total = action.payload;
        },
        setAllProduct:(state,action)=>{
            state.allProduct = action.payload;
        }
    }
});

export const { setTotal, setAllProduct } = productSlice.actions;
export default productSlice.reducer;
