import { Navigate } from "react-router-dom"

export const ShowOnLogin=({children})=>{
    if(sessionStorage.getItem("30marmini") != null){
        return children
      }
      else return null
}


export const ShowOnLogout=({children})=>{
    if(sessionStorage.getItem("30marmini") == null){
        return children
      }
      else return null
}

export const ProtectedAdmin=({children})=>{
    if(sessionStorage.getItem("30marmini") != null){
        let obj=JSON.parse(sessionStorage.getItem("30marmini"))
        if(obj.isLoggedIn && obj.role=="0")
            return children
        else return <Navigate to='/' replace={true}/>
      }
      else return <Navigate to='/login' replace={true}/>
}

export const Protected=({children})=>{
    if(sessionStorage.getItem("30marmini") != null){
        let obj=JSON.parse(sessionStorage.getItem("30marmini"))
        if(obj.isLoggedIn && obj.role=="1")
            return children
        else return <Navigate to='/' replace={true}/>
      }
      else return <Navigate to='/login' replace={true}/>
}


