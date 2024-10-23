import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit"
import axios from "axios"

type InitialState = {
    products:any,
    isLoading:Boolean,
    isError:Boolean

}

const initialState:InitialState = {
    products:[],
    isLoading:false,
    isError:false
}

export const AllApiHandler:any = createAsyncThunk("AllApiHandler",async()=>{
    try{
        const productsApi = await axios.get("/pages/api/admin/uploadProjects")
        const products = productsApi?.data?.Products
        return {products}
    }catch(error:any){
        throw new Error(error) 
    }
})

export const Slice = createSlice({
    name: 'Slice',
    initialState,
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(AllApiHandler.pending,(state:any,action: PayloadAction<any>)=>{
            state.isLoading = true
        }),
        builder.addCase(AllApiHandler.fulfilled,(state:any,action: PayloadAction<any>)=>{
            state.products = action.payload
        }),
        builder.addCase(AllApiHandler.rejected,(state:any,action: PayloadAction<any>)=>{
            state.isError = true
        })
    },
});

export const {  } = Slice.actions

export default Slice.reducer