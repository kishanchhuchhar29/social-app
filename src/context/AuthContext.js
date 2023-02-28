import { createContext, useReducer } from "react"
import AuthReducer from "./AuthReducer";
const INITIAL_STATE={
    user:{
        _id:"63f6df4731e66443d6bc4768",
        username:"jane",
        email:"jane@gmail.com",
        isAdmin:false,
        
profilePicture:"person/1.jpeg",

    },
    isFatching:false,
    error:false
}
export const AuthContext=createContext(INITIAL_STATE);
export const AuthContextProvider=({children})=>{
    const [state,dispatch]=useReducer(AuthReducer,INITIAL_STATE);
    return(
        <AuthContext.Provider value={{
            user:state.user,
            isFatching:state.isFatching,
            error :state.error,
            dispatch
        }}>
        {children}
        </AuthContext.Provider>
    )
}