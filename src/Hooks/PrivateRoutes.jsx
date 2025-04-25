import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const useAuth = ()=>{
    const [authstate, setauthstate] = useState({isloggedin : false ,Role:""})
    const [isloading, setisloading] = useState(true)

    useEffect(()=>{
        const id = localStorage.getItem("id")
        const role = localStorage.getItem("role")

        if(id){
            setauthstate({isloggedin:true,role})
        }
        setisloading(false)
    },[])
    return{...authstate,isloading}
}
const PrivateRoutes =()=>{
    const auth = useAuth()

    if(auth.isloading){
        return <h1>loading....</h1>
    }
    return auth.isloggedin?<Outlet/>:<Navigate to  = "/login"/>
}
export default PrivateRoutes